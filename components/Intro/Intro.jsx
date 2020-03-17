/**
 * @file Intro.js
 */
import * as THREE from 'three'
import React, { Suspense , useState} from 'react'
import PropTypes from 'prop-types'
import { Canvas, Dom, useResource } from 'react-three-fiber'

// import Room from '../Room'
import Tree from '../Tree'

function Lights (over = false ,lightColor = '0x00ff00') {
  const [spotRef, spotlight] = useResource()
  const [ambientRef, ambient] = useResource()

  return (
    <group position={[1, 1, 1.5]}>
      {/* <pointLight
        castShadow
        position={[0, 0, 10]}
        intensity={.55} /> */}
      <ambientLight
        ref={ambientRef}
        intensity={over ?  0.45 : 2.45 }
        color={lightColor}
        castShadow
      />
      <spotLight
        castShadow
        ref={spotRef}
        intensity={1}
        distance={-3}
        angle={Math.PI / 2}
        shadow-mapSize={new THREE.Vector2(2048 * 5, 2048 * 5)}
        penumbra={2}
        color={lightColor}
      />
    </group>
  )
}

const Intro = (props) => {
  const {
    tagName: Tag,
    className,
    variant,
    children,
  } = props
  const [over,setOver] = useState(false)
  return (

    <Tag className={`intro intro--${variant} ${className}`}>
      <Canvas
        shadowMap
        gl={{ antialias: true, alpha: true }}
        // pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ fov: 85, position: [0, 0, 1] }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x1B173B, 0)
          console.log('Canvas loaded...')
        }}
        onPointerOver={() => setOver(true)}
        onPointerOut={() => setOver(false)}
      >
        <Lights over={over}/>
        <Suspense fallback={<Dom>Loading...</Dom>}>
        <Tree />
        {/* <Room /> */}
        </Suspense>
      </Canvas>
      {children}
      <style jsx>{`
        .intro {
          width: 100vw;
          height: 50vw;
        }
      `}</style>
    </Tag>
  )
}

Intro.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

Intro.defaultProps = {
  tagName: 'div',
  className: '',
  variant: 'default',
  children: '',
}

export default Intro
