import React from 'react';

import * as THREE from 'three';
import Stats from 'stats.js';

import React3 from 'react-three-renderer';

import ExampleBase from '../ExampleBase';
import Orbitcontrols from 'three-orbitcontrols';



class Geometries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [30, 110],
            zoom: 5
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ center: props.center, zoom: props.zoom }, () => {

        })
    }
    componentDidMount() {
        util.adaptHeight('WebGL-output', 105, 300);
        let { center, zoom } = this.state;

        //this.init();
    }
/*
    init() {



        //   OrbitControls


        scene = new THREE.Scene();





        camera = new THREE.PerspectiveCamera(45, 4 / 3, 0.1, 100);
        camera.position.set(0.0, 1.5, 3.0);

        renderer = new THREE.WebGLRenderer({ antialias: true });

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.autoRotate = false;
        controls.autoRotateSpeed = -1.0;
        controls.enablePan = false;

        var ambient = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambient);

        var direcitonal = new THREE.DirectionalLight(0xffffff, 0.5);
        direcitonal.position.set(5.0, 2.0, 5.0).normalize();
        scene.add(direcitonal);




        // just some code for the loading
        var manager = createLoader(renderer.domElement, animate);

        var texLoader = new THREE.TextureLoader(manager).setCrossOrigin(true);

        var texture = texLoader.load('https://s3-eu-west-2.amazonaws.com/bckld/lab/textures/earth_latlon.jpg');
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        var earth = this.Earth(1.0, texture);



                earth.createMarker(48.856700, 2.350800); // Paris
                earth.createMarker(51.507222, -0.1275); // London
                earth.createMarker(34.050000, -118.250000); // LA
                earth.createMarker(41.836944, -87.684722); // Chicago
                earth.createMarker(35.683333, 139.683333); // Tokyo
                earth.createMarker(33.333333, 44.383333); // Baghdad
                earth.createMarker(40.712700, -74.005900); // New York

                earth.createMarker(55.750000, 37.616667); // Moscow
                earth.createMarker(35.117500, -89.971111); // Memphis
                earth.createMarker(-33.925278, 18.423889); // Cape Town
                earth.createMarker(32.775833, -96.796667); // Dallas
                earth.createMarker(52.366667, 4.900000); // Amsterdam
                earth.createMarker(42.358056, -71.063611); // Boston
                earth.createMarker(52.507222, 13.145833); // Berlin


        earth.createMarker(37.783333, -122.416667); // San Francisco

        scene.add(earth);

        window.addEventListener('resize', onResize);
        onResize();



        document.getElementById('earth').appendChild(renderer.domElement);



    }


    function Marker() {
        THREE.Object3D.call(this);

        var radius = 0.005;
        var sphereRadius = 0.02;
        var height = 0.05;

        var material = new THREE.MeshPhongMaterial({ color: 'black' });
        var material2 = new THREE.MeshPhongMaterial({ color: 'red' });

        var cone = new THREE.Mesh(new THREE.ConeBufferGeometry(radius, height, 8, 1, true), material2);
        cone.position.y = height * 0.5;
        cone.rotation.x = Math.PI;

        var sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(sphereRadius, 16, 8), material);
        sphere.position.y = height * 0.95 + sphereRadius;

        this.add(cone, sphere);
    }

    Marker.prototype = Object.create(THREE.Object3D.prototype);





    function Earth(radius, texture) {
        THREE.Object3D.call(this);

        this.userData.radius = radius;

        var earth = new THREE.Mesh(
            new THREE.SphereBufferGeometry(radius, 64.0, 48.0),
            new THREE.MeshPhongMaterial({
                map: texture
            })
        );

        this.add(earth);
    }
    Earth.prototype = Object.create(THREE.Object3D.prototype);

    Earth.prototype.createMarker = function (lat, lon) {
        var marker = this.Marker();



        var latRad = lat * (Math.PI / 180);
        var lonRad = -lon * (Math.PI / 180);
        var r = this.userData.radius;

        marker.position.set(Math.cos(latRad) * Math.cos(lonRad) * r, Math.sin(latRad) * r, Math.cos(latRad) * Math.sin(lonRad) * r);
        marker.rotation.set(0.0, -lonRad, latRad - Math.PI * 0.5);

        this.add(marker);
    };


   function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }


    function   animate() {
        requestAnimationFrame(animate);

        controls.update();

        renderer.render(scene, camera);
    }
*/


    render() {
        return ( <div id="earth"></div> )
    }
}

export default Geometries;