<template>
  <section class="ticket">
    <h1 class="brand">V-FOR</h1>

    <p class="stars">************ ORDER RECEIPT ************</p>

    <dl class="meta">
      <div class="row"><dt>Date:</dt><dd>{{ nowStr }}</dd></div>
      <div class="row"><dt>Terminal:</dt><dd>V-For CAFE</dd></div>
      <div class="row"><dt>Served by:</dt><dd>Vue.js</dd></div>
    </dl>

    <div class="stars"></div>

    <!-- 질문/설명 영역 (원본 감성) -->
    <p class="question">오늘의 주문을 확인해 주세요!</p>

    <div class="barcode" aria-hidden="true"></div>

    <!-- 항목: 왼쪽 텍스트 + 가운데 점선 + 오른쪽 번호 -->
    <ul class="lines">
      <li v-for="(item, i) in orders" :key="item.name" class="line">
        <span class="label">{{ item.name }}</span>
        <span class="dots" aria-hidden="true"></span>
        <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
      </li>
    </ul>

    <p class="stars">************ ORDER RECEIPT ************</p>

    <div class="thanks">
      <div>T H A N K &nbsp; Y O U</div>
      <div>HAVE A NICE V-FOR DAY</div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const orders = ref([
  { name: '브리또', price: 7000 },
  { name: '샐러드', price: 5000 },
  { name: '아메리카노', price: 3000 },
  { name: '케이크', price: 4500 }
])

const nowStr = computed(() => {
  const d = new Date()
  // 예: 26-Aug-2025 10:32:45
  const dd = String(d.getDate()).padStart(2, '0')
  const mmm = d.toLocaleString('en-US', { month: 'short' })
  const yyyy = d.getFullYear()
  const hh = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${dd}-${mmm}-${yyyy} ${hh}:${mi}:${ss}`
})
</script>

<style scoped>
/* ==== Theme ==== */
:root {
  --paper: #ffa1c1;       /* 핑크 종이 */
  --ink: #0e0e0e;         /* 인쇄 잉크 */
  --muted: #323232;
}

/* ==== Ticket Layout ==== */
.ticket{
  width: 340px;
  margin: 24px auto;
  padding: 18px 18px 20px;
  background:#f1eee6;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 8px;
  box-shadow: 0 14px 0 rgba(0,0,0,.25);
  font-family: Pretendard, ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-variant-numeric: tabular-nums;
}

/* BIG title */
.brand{
  margin: 0 0 4px;
  font-size: 48px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: .03em;
  text-align: center;
}

/* star lines */
.stars{
  margin: 8px 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: .06em;
  word-spacing: .2em;
}

/* meta block */
.meta{ margin: 8px 0 10px; }
.meta .row{
  display: flex; gap: 8px; justify-content: space-between;
  font-size: .92rem;
}
.meta dt{ color: var(--muted); }
.meta dd{ margin: 0; font-weight: 600; }

/* prompt/question */
.question{
  margin: 6px 0 8px;
  font-weight: 700;
}

/* fake barcode */
.barcode{
  height: 54px; margin: 6px 0 12px;
  background:
    repeating-linear-gradient(
      90deg,
      #000 0, #000 2px,
      transparent 2px, transparent 4px,
      #000 4px, #000 6px,
      transparent 6px, transparent 9px
    );
}

/* lines with dotted leader */
.lines{ list-style: none; padding: 0; margin: 8px 0 12px; }
.line{
  display: flex; align-items: baseline; gap: 8px;
  font-size: .98rem; padding: 4px 0;
}
.label{ white-space: nowrap; }
.dots{
  flex: 1 1 auto; height: 1px; transform: translateY(-2px);
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 6px 2px; background-repeat: repeat-x; background-position: left center;
}
.num{ min-width: 28px; text-align: right; font-weight: 800; }

/* thanks */
.thanks{
  text-align: center;
  letter-spacing: .28em;
  line-height: 1.6;
  font-weight: 800;
}

/* print: 영수증 프린터 느낌 */
@media print{
  body{ background: #fff; }
  .ticket{
    margin: 0; width: 72mm; border-radius: 0;
    box-shadow: none;
  }
}
</style>
