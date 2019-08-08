import React from 'react'
import { Card } from '@fusuma/client'

export const SelfIntroduce = () => (
  <Card
    left={<img src="https://pbs.twimg.com/profile_images/979597254188126208/Kw_5K41V_400x400.jpg" />}
    right={
      <ul class="description">
        <li>名前: markey, <a href="https://twitter.com/markey_koichan">markey_koichan(Twitter)</a></li>
        <li>職業: フロントエンドエンジニア</li>
        <li>スキル: React/Vue/TypeScript</li>
        <li>趣味: 日本語ラップ、MCバトル鑑賞</li>
      </ul>
    }
  />
)
