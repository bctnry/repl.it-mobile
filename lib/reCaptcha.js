export default `
<!DOCTYPE html>
<html>
  <head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>
  </head>
  <body>
    <script src='https://www.google.com/recaptcha/api.js?render=6Lc7fZQUAAAAAIXMD8AonuuleBX0P3hS2XW364Ms'></script>
    <script>
      grecaptcha.ready(async () => {
        const token = await grecaptcha.execute('6Lc7fZQUAAAAAIXMD8AonuuleBX0P3hS2XW364Ms')
        window.postMessage(token)
      })
    </script>
  </body>
</html>
`