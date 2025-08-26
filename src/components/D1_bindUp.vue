<template>
    <section>
        <h2>* Pretendard Font Guide *</h2>

        <div class="controls">
            <label>Size
                <input type="range" min="12" max="72" v-model.number="sizePx">
                <span>{{ sizePx }}px</span>
            </label>
            <label>Weight
                <input type="range" min="200" max="900" step="10" v-model.number="weight">
                <span>{{ weight }}</span>
            </label>
            <label>Line-Height
                <input type="range" min="1.0" max="2.0" step="0.05" v-model.number="lh">
                <span>{{ lh.toFixed(2) }}</span>
            </label>
            <label>Letter-Spacing
                <input type="range" min="-0.05" max="0.1" step="0.005" v-model.number="ls">
                <span>{{ (ls * 1000).toFixed(0) }}‰</span>
            </label>
         
        </div>


        <!-- 프리뷰: 배열 스타일 + CSS 변수 + 클래스 토글 -->

        <div class="preview" :style="[baseStyle, previewStyle, { '--lh': lh, '--ls': `${ls}em` }]"
            :class="{ heavy: weight >= 700, tight: ls < 0 }" v-bind="previewAttrs">
            <p class="label">프리뷰</p>
            <p>PrEtendard — 한글 ABC abc 1234 !? 가독성 테스트 문장입니다.</p>
        </div>

        <!-- 고정 샘플 -->

        <div class="grid">
            <div v-for="s in fixedSizes" :key="s" class="sample" :style="{ fontSize: s }"
                :class="['chip', { on: s === '${sizePx}px' }]" :date-size="s" :title="`샘플 사이즈 ${s}`">
                {{ s }} Pretendard
            </div>
        </div>

        <!-- 권장 스케일: boolean 속성 바인딩(open) -->

        <details class="scale" :open="openScale">
            <summary>타이포 스케일 예시 (1.250 Major Third) </summary>
            <ul>
                <li v-for="(v, k) in scale" :key="k">
                    <code>{{ k }}</code> — <strong>{{ v }}</strong>
                </li>
            </ul>
        </details>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';


const sizePx = ref(32)
const weight = ref(700)
const lh = ref(1.4)
const ls = ref(0)
const openScale = ref(true)

const baseStyle = computed(() => ({
    fontFamily:
        "Pretendard, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif",
}))

const previewStyle = computed(() => ({
    fonstSize: `${sizePx.value}px`,
    fontWeight: weight.value,

    // lineHeight/letterSpacing은 CSS 변수로도 내려보내는 중

}))

// 여러 속성을 한 번에 바인딩 (v-bind="obj")

const previewAttrs = computed(() => ({
    title: `Size ${sizePx.value}px, 두께 ${weight.value}`,
    'aria-label': `프리뷰: ${sizePx.value}px, 두께 ${weight.value}`,
    'data-size': sizePx.value,
}))


const fixedSizes = ['28px', '32px', '36px', '40px', '44px']

const scale = {
    H1: '48px',
    H2: '40px',
    H3: '32px',
    H4: '28px',
    'Body-L': '18px',
    Body: '16px',
    Caption: '13px'

}


</script>


<style scoped>
section{
    margin: 20px;
}
.card {
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 16px;
    background: #fff;
}

.controls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
    margin-bottom: 12px;
}

.controls label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
}

.preview {
    border: 1px dashed #d1d5db;
    border-radius: 12px;
    padding: 16px;
    background: #fafafa;
    margin-bottom: 12px;
    line-height: var(--lh);
    /* CSS 변수로 바인딩 사용 */
    letter-spacing: var(--ls);
}

.preview .label {
    font-size: 12px;
    color: #6b7280;
    margin: 0 0 6px;
}

.heavy {
    font-weight: 700;
}

.tight {
    outline: 2px dashed #ddd;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 8px;
}

.sample {
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
    background: #fff;
    font-weight: 600;
}

.chip {
    transition: transform .12s ease;
}

.chip.on {
    transform: scale(1.02);
    border-color: #d1d5db;
}

.scale summary {
    cursor: pointer;
    font-weight: 700;
    margin-top: 6px;
}

.scale ul {
    margin: 8px 0 0 16px;
}
</style>