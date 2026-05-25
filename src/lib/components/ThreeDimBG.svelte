<script lang="ts">
    import { T, useTask } from "@threlte/core";
    // import { interactivity } from '@threlte/extras'
    // import { Spring } from 'svelte/motion'

    // interactivity();

    let rotation = $state(0);
    useTask(delta => {
        rotation += delta;
    });
</script>


<T.PerspectiveCamera
        makeDefault
        position={[10, 10, 10]}
        oncreate={(ref) => {
            ref.lookAt(0, 1, 0)
        }}>
</T.PerspectiveCamera>

<T.Mesh rotation.y={rotation}>
    <T.BoxGeometry args={[1, 1, 1]}/>
    <T.MeshBasicMaterial color="red" wireframe/>
</T.Mesh>

<!--<script lang="ts">-->
<!--    import * as BABYLON from "@babylonjs/core";-->
<!--    import { onMount } from "svelte";-->

<!--    let canvas: HTMLCanvasElement | null = $state(null);-->

<!--    onMount(() => {-->
<!--        const engine = new BABYLON.Engine(canvas, true);-->
<!--        const scene = new BABYLON.Scene(engine);-->
<!--        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);-->

<!--        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));-->
<!--        camera.attachControl(canvas, true);-->

<!--        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));-->

<!--        const box = BABYLON.MeshBuilder.CreateBox("box1", {});-->
<!--        // box.position.z = -3;-->

<!--        // scene.addMesh(box);-->

<!--        engine.runRenderLoop(() => {-->

<!--            box.rotation.x += 0.01;-->
<!--            box.rotation.y += 0.01;-->

<!--            scene.render();-->
<!--        });-->
<!--    });-->
<!--</script>-->


<!--<canvas bind:this={canvas}-->
<!--        class="w-screen h-screen"></canvas>-->