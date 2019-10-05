<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">ホーム</nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <!-- ここにログインボタン -->
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="main-body">
      <!-- ページのレンダリング要素 -->
      <nuxt />
    </div>
    <footer class="footer">
      <div>
        <div class="content has-text-centered">
          <p>&copy; qaSample</p>
        </div>
      </div>
    </footer>
  </div>
</template>
