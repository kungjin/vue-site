<template>
    <div class="site">
        <header>

            <!-- 로고 배열 -->
            <a class="brand" href="/" aria-label="홈">
                <img src="/favicon.svg" alt="LOGO" />
            </a>
            <!-- 리스트 목록  -->
            <nav class="gnb">
                <ul>
                    <li><router-link to="/">
                            Home
                        </router-link></li>

                    <li><router-link to="/about">
                            About
                        </router-link>
                    </li>


                    <li class="has-sub" @mouseenter="open = 'ex'" @mouseleave="open = null">

                        <button class="sub-btn" :aria-expanded="open === 'ex'" aria-controls="ex-sub"
                            @click="toggle('ex')">
                            Example
                        </button>
                        <ul id="ex-sub" class="submenu" :class="{ show: open === 'ex' }">
                            <li><router-link to="/example/html">HTML</router-link></li>
                            <li><router-link to="/example/javascript">JavaScript</router-link></li>
                            <li><router-link to="/example/react">React</router-link></li>
                            <li><router-link to="/example/vue">Vue</router-link></li>
                        </ul>
                    </li>

                    <li class="has-sub" @mouseenter="open = 'wd'" @mouseleave="open = null">
                        <button class="sub-btn" :aria-expanded="open === 'wd'" aria-controls="wd-sub"
                            @click="toggle('wd')">
                            Web Design
                        </button>
                        <ul id="wd-sub" class="submenu" :class="{ show: open === 'wd' }">
                            <li><router-link to="/wed-design#a">a script</router-link></li>
                            <li><router-link to="/wed-design#b">b script</router-link></li>
                            <li><router-link to="/wed-design#c">c script</router-link></li>
                            <li><router-link to="/wed-design#d">d script</router-link></li>
                            <li><router-link to="/wed-design#e">e script</router-link></li>
                            <li><router-link to="/wed-design#f">f script</router-link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        <aside>
            <div class="banner">
                사진 슬라이더 배너
            </div>

            <button>공지사항 </button>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <button>갤러리 </button>
            <ul>
                <li>
                    <img src="" alt="">
                    <p></p>
                </li>
                <li>
                    <img src="" alt="">
                    <p></p>
                </li>
            </ul>

            <ul>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
            </ul>


        </aside>

        <main>
            <slot>-----우측 이미지----</slot>
        </main>

        <footer>
            <div class="foot_lo">
                <div>
                    <a class="brand" href="/" aria-label="홈">
                        <img src="/favicon.svg" alt="LOGO" />
                    </a>
                </div>
                <div>
                    <ul class="links">
                        <li><a href="#">링크1</a></li>
                        <li><a href="#">링크2</a></li>
                        <li><a href="#">링크3</a></li>
                        <li><a href="#">링크4</a></li>
                        <li><a href="#">링크5</a></li>
                        <li><a href="#">링크6</a></li>
                    </ul>
                    <p class="copy">© 2025 Web Design Practice</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(null)
const toggle = () => (open.value = open.value === key ? null : key)
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}


.site {
    display: grid;
    grid-template-columns: 200px 400px 1fr;

    grid-template-rows: auto 1fr auto;

    grid-template-areas:
        "header aside  main"
        "footer footer footer";
}



.header {
    grid-area: header;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 16px;
    border-bottom: 1px solid #eee;
    background: #fff;
}

.brand img {
    width: 120px;
    height: 80px;
}








.foot_lo {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.links a {
    color: #333;
    text-decoration: none;
}

.copy {
    margin: 0;
    color: #666;
    font-size: 13px;
}

@media (max-width: 960px) {
    .site {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "aside"
            "main"
            "right"
            "footer";
    }
}
</style>