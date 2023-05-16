import { Router } from '@edgio/core'

const router = new Router()

router.match('/:path*', ({ renderWithApp }) => {
  renderWithApp()
})

router.static('dist/analog/public')

export default router
