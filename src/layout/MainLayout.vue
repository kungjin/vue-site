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
                    <li class="single-btn">
                        <router-link to="/">
                            Home
                        </router-link>
                    </li>

                    <li class="single-btn">
                        <router-link to="/about" @click="setPreview('about')">
                            About
                        </router-link>
                    </li>


                    <li class="has-sub" @mouseenter="open = 'ex'" @mouseleave="open = null">

                        <button class="sub-btn" :aria-expanded="open === 'ex'" aria-controls="ex-sub"
                            @click="toggle('ex')">
                            Example
                        </button>
                        <ul id="ex-sub" class="submenu" :class="{ show: open === 'ex' }">
                            <li><router-link to="/example/html" @click="setPreview('html')">HTML</router-link></li>
                            <li><router-link to="/example/javascript"
                                    @click="setPreview('javascrip')">JavaScript</router-link></li>
                            <li><router-link to="/example/react" @click="setPreview('react')">React</router-link></li>
                            <li><router-link to="/example/vue" @click="setPreview('vue')">Vue</router-link></li>
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
                <!-- (삶의 명언 같은거, 급훈 ) -->
            </div>

            <section class="panel">
                <button class="panel-title" type="button"> 공지사항 </button>
                <ul class="notice">
                    <li>공지 1</li>
                    <li>공지 2</li>
                    <li>공지 3</li>
                </ul>
            </section>

            <section class="panel">
                <button class="panel-title" type="button"> 갤러리 </button>
                <ul class="gallery">
                    <li><img src="https://picsum.photos/seed/g1/120/80" alt="">
                        <p>설명 1</p>
                    </li>
                    <li><img src="https://picsum.photos/seed/g2/120/80" alt="">
                        <p>설명 2</p>
                    </li>
                </ul>
            </section>

            <ul class="quick">
                <li><img src="https://picsum.photos/seed/q1/60/40" alt=""></li>
                <li><img src="https://picsum.photos/seed/q2/60/40" alt=""></li>
                <li><img src="https://picsum.photos/seed/q3/60/40" alt=""></li>
                <li><img src="https://picsum.photos/seed/q4/60/40" alt=""></li>
            </ul>


        </aside>

        <main>
            <RightPane />
        </main>

        <footer>
            <div class="foot_lo">

                <div class="foot_lo_1">
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
import { previewState } from '../pages/preview'
import RightPane from '../pages/RightPane.vue';
const setPreview = (k) => (previewState.key = k)


const open = ref(null)
const toggle = (key) => (open.value = open.value === key ? null : key)
</script>

<style scoped>
* {
    font-family: 'Pretendard', system-ui, Helvetica, Arial, sans-serif;
}


.site {
    display: grid;
    grid-template-columns: 200px 400px 1fr;

    grid-template-rows: auto 1fr auto;

    grid-template-areas:
        "header aside  main"
        "footer footer footer";
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 10px 16px;
    border-bottom: 1px solid #eee;
    background: #fff;
}

header {
    grid-area: header;
}

aside {
    grid-area: aside;
}

main {
    grid-area: main;
}

footer {
    grid-area: footer;
}


ul {
    list-style: none;
    margin: 0;
    padding: 0;
}



.brand img {
    width: 120px;
    height: 80px;
}

.gnb a {
    width: 100%;
    text-decoration: none;
    color: #333;
    font-weight: 700;
}

.gnb ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: center;
}



.single-btn {
    margin: 0;
    font-size: 15px;
    text-decoration: none;
    font-weight: 700;
    padding: 8px 10px;
    border-radius: 2px;
    background: transparent;
    border: 0;
    cursor: pointer;
    min-width: 200px;
}

.slide{
    width: 100%;
    height: 100%;
}

.menu-btn,
.sub-btn {
    font-size: 15px;
    text-decoration: none;
    color: #333;
    font-weight: 700;
    padding: 8px 10px;
    border-radius: 2px;
    background: transparent;
    border: 0;
    cursor: pointer;
}

.menu-btn:hover {
    background: #f4f4f4;
}


/* 드롭다운 */
.has-sub {
    position: static;
    display: flex;
    flex-direction: column;
}

.submenu {
    position: static;
    min-width: 200px;
    background: #333;
    color: #fff;
    border-radius: 6px;

    margin-top: 0px;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;

    box-shadow: 0 8px 24px rgba(0, 0, 0, .15);
    transition: .15s ease;
    cursor: pointer;
}

.submenu.show {
    margin-top: 3px;
    padding: 0 2px;
    opacity: 1;
    padding: 6px;
    pointer-events: auto;
    max-height: 400px;

}

.submenu a {
    display: block;
    padding: 8px 10px;
    color: #fff;
    border-radius: 6px;
}

.submenu a:hover {
    background: #444;
}


.banner {
    display: flex;
    min-height: 150px;
    justify-content: center;
    align-items: center;
}

.panel {
    text-align: left;
    width: 100%;
    margin-bottom: 10px;
}

.panel-title {
    margin-left: 20px;
    border: none;
    border-radius: 7px 7px 0 0;
}

.notice {
    font-size: 13px;
    margin: 0 20px;
}



.quick {
    display: flex;
    justify-content: center;
}

.quick img {
    margin: 15px;
}

.gallery {
    display: flex;
    justify-content: center;
}

.gallery img {
    margin: 0 18px;
}

.foot_lo {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
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

    .gnb {
        width: 100%;
    }

    .gnb ul {
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: stretch;
    }

    .gnb li {
        width: 100%;
    }


    .gnb a,
    .menu-btn,
    .sub-btn {
        display: block;
        width: 100%;
        text-align: center;
        padding: 12px 14px;
        border-radius: 6px;
    }

    ul,
    li,
    .single-btn {
        margin: 0;
        padding: 0;
    }


}
</style>