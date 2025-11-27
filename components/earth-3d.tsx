'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  
  const textureLoader = new THREE.TextureLoader()

  // Load textures
  const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg')
  const earthBump = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg')
  const earthSpec = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg')
  const cloudsTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png')

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0015
    }
  })

  return (
    <>
      {/* Earth dengan material yang lebih cerah */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={earthBump}
          bumpScale={0.03}
          specularMap={earthSpec}
          shininess={5}
          specular={new THREE.Color(0x444444)}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.53, 64, 64]} />
        <meshPhongMaterial
          map={cloudsTexture}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Lighting yang lebih terang */}
      <ambientLight intensity={1.5} />
      <directionalLight 
        position={[5, 3, 5]} 
        intensity={1.2}
        color={0xffffff}
      />
      <pointLight position={[3, 2, 3]} intensity={0.6} />
      <pointLight position={[-3, -1, -2]} intensity={0.4} color={0x88ccff} />
    </>
  )
}

function Camera() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 4]}
        fov={60}
        near={0.1}
        far={1000}
      />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={2.5}
        maxDistance={6}
        autoRotate={false}
      />
    </>
  )
}

export function Earth3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Suspense fallback={null}>
          <Camera />
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}