#!/bin/bash

#
# Overview:
# This script handles running the gltfjsx tool which converts a GLTF file to a Javacript
# file that uses React Three Fiber.
#
# Example: gltfToFiber ./public/models/layerframe-round-logo.glb ./components/Intro3D/LogoRound.jsx
#
echo "Converting GLTF model $1 to $2..."
npx gltfjsx $1 $2
