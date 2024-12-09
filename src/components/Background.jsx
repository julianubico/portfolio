import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function isMobile() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.browser|vodafone|wap|windows ce|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|acer|airn|alca|amoi|anex|aptu|arch|argo|aste|attw|au|avan|beck|bell|bnq|bird|blackberry|bumb|bw-n|c55\/|cap|ccwa|cell|chtm|cmd-|craw|dait|dc-s|devi|dmob|doc|ds12|el49|eml2|eri|esl8|ez[4-7]0|fly|g1 u|gene|gf-5|go\.w|grun|haie|hd-|hei-|hip|hita|hp i|htc|huaw|iac|idea|ikom|im1k|inno|ipaq|iris|java|jigs|kddi|kgt|klon|kwc-|kyo|leno|lexi|lge|lynx|m1-w|m50|mate|mc01|midp|mm|mo01|mozz|mt50|mwbp|mywa|n100|n200|n300|n700|nokia|nzph|o2im|opwv|oran|p800|palm|pdxg|pg13|phil|pire|pocket|prox|psio|pt-g|qa-a|qc07|r600|rim|rozo|s55\/|sama|sanyo|sch-|sdk\/|se47|sgh-|sie-|sk-0|slid|soft|sony|sp01|sy01|t250|t600|tagt|tcl-|tdg-|tim-|t-mo|topl|tx-|up\.b|utst|v750|veri|virg|vodafone|vx52|webc|whit|wonu|x700|zte-/i.test(
        a.substr(0, 4),
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;

    const scene = new THREE.Scene();
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000,
    );
    camera.position.z = 300;

    const wireframe = new THREE.WireframeGeometry(
      new THREE.IcosahedronGeometry(
        isMobile() ? window.innerWidth / 6 : window.innerWidth / 12,
        4,
      ),
    );
    const line = new THREE.LineSegments(wireframe);
    line.material.transparent = true;
    camera.lookAt(line.position);

    const geometry = new THREE.BufferGeometry();
    const materials = [];
    const vertices = [];

    const textureLoader = new THREE.TextureLoader();
    const assignSRGB = (texture) => (texture.colorSpace = THREE.SRGBColorSpace);
    let sprite = textureLoader.load("/assets/sp2.png", assignSRGB);
    let sprite3 = textureLoader.load("/assets/sp3.png", assignSRGB);

    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3),
    );

    let parameters = [
      [null, sprite3, 10],
      [null, sprite3, 10],
      [null, sprite, 1],
      [null, sprite, 1],
      [null, sprite, 1],
    ];

    for (let i = 0; i < parameters.length; i++) {
      parameters[i][0] = [
        Math.random(),
        Math.random() * 0.7 + 0.7,
        Math.random() * 0.5 + 0.5,
      ];
      //const color = parameters[i][0];
      const sprite = parameters[i][1];
      const size = parameters[i][2];

      materials[i] = new THREE.PointsMaterial({
        size: size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.1,
      });

      const particles = new THREE.Points(geometry, materials[i]);

      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      scene.add(particles);
    }

    let halfHeight = window.innerHeight / 2,
      halfWidth = window.innerWidth / 2;

    const onResize = () => {
      halfHeight = window.innerHeight / 2;
      halfWidth = window.innerWidth / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onPointerMove = (event) => {
      if (event.isPrimary === false) return;
      mouseX = event.clientX - halfWidth;
      mouseY = event.clientY - halfHeight;
    };

    window.addEventListener("resize", onResize);
    document.body.addEventListener("pointermove", onPointerMove);

    const animate = () => {
      const date = Date.now();
      const time = date * 0.0001;

      const sensitivity = 0.005;
      camera.position.x += (-mouseX - camera.position.x) * sensitivity;
      camera.position.y += (mouseY - camera.position.y) * sensitivity;
      camera.lookAt(line.position);

      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];
        if (object instanceof THREE.Points)
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
      }

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      document.body.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      className="fixed left-0 top-0 -z-10 h-screen w-screen"
      ref={canvasRef}
    />
  );
}

export default Background;
