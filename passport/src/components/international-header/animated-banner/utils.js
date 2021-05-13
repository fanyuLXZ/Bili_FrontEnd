
export const clamp = (x, min, max) => Math.max(min, Math.min(max, x))

export const loadImage = src => {
  const img = new Image()
  img.src = src
  return new Promise(r => img.onload = () => r(img))
}


// 2D齐次变换 只矩阵传前两行，默认第三行为[0, 0, 1]
export const inverseMat = m => {
  return [
    -m[4], m[1], -m[1]*m[5] + m[2]*m[4],
    m[3], -m[0], -m[2]*m[3] + m[0]*m[5]
  ].map(v => v/(m[1]*m[3]-m[0]*m[4]))
}
export const transformMat = (mat, vec) => {
  return [
    mat[0] * vec[0] + mat[1] * vec[1] + mat[2] * vec[2],
    mat[3] * vec[0] + mat[4] * vec[1] + mat[5] * vec[2],
  ]
}
