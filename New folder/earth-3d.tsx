'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Environment, ResizeObserver as DreiResizeObserver } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'

function EarthMesh() {
  const earthRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  const textureLoader = new THREE.TextureLoader()

  // Load textures from three.js repository
  const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg')
  const earthBump = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg')
  const earthSpec = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg')
  const cloudsTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png')

  useEffect(() => {
    const interval = setInterval(() => {
      if (earthRef.current) {
        earthRef.current.rotation.y += 0.0005
      }
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += 0.0007
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={earthBump}
          bumpScale={0.05}
          specularMap={earthSpec}
          shininess={25}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef} scale={1.01}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={cloudsTexture}
          transparent
          opacity={0.4}
          emissive={0xffffff}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 3, 5]} intensity={1.2} color={0xffffff} />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color={0x0099ff} />
    </>
  )
}

function CameraRig() {
  const { camera } = useThree()

  useEffect(() => {
    const updateCamera = () => {
      // Sesuaikan aspek rasio dengan ukuran container
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', updateCamera)
    updateCamera()

    return () => window.removeEventListener('resize', updateCamera)
  }, [camera])

  return null
}

export function Earth3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <CameraRig />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <Suspense fallback={null}>
          <EarthMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
