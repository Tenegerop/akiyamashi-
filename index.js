const { Client, Intents } = require('discord.js')
const client = new Client({ intents: Object.keys(Intents.FLAGS) })

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})


const cron = require('node-cron')

cron.schedule('0 * * * *', () => {
  msg.channel.send('0時です。また明日、社長！')
})

client.on('messageCreate', async msg => {
  if (msg.content === 'おはよう') {
    msg.channel.send('おはようございます、社長！')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'こんばんは') {
    msg.channel.send('お仕事お疲れさまです、社長！')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'おやすみ') {
    msg.channel.send('良い夢を、社長')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'エデル水着') {
    msg.channel.send('https://www.4gamer.net/games/490/G049044/20220427086/SS/008.jpg')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'ダイブ50') {
    msg.channel.send('https://youtu.be/m7je8BWtPoc')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'アキヤマ氏の自己紹介') {
    msg.channel.send("カウサイ民向けの支援bot、アキヤマ氏。今のところおはよう、こんばんは等の挨拶に返答できます！\nダイブ50と入力すると制作者(テネガー）作の動画が表示されたりするなど、攻略系のサポートシステムも実装予定です")
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒アオイ  パッシブ') {
    msg.channel.send('武装同期化\n出撃時、半径7m以内の敵のスキルクールタイムを8秒間増加し、ノックバックさせる。基本攻撃を3回行うと強化攻撃を使用し、念動小銃を召喚する(最大4体)。\n自身と念動小銃の攻撃力は12秒間、5%増加する(最大25%)。念動小銃は攻撃者が受けたダメージを代わりに受ける。\nアオイ・シズカのHPが70%以下になると後方に移動して周辺の敵をノックバックさせた後、念動小銃1体を追加で召喚する。\n有効打撃数:2\nLv.2	攻撃速度+5%\nLv.3	攻撃速度+5%\nLv.4	攻撃速度+10%\nLv.5	HPが40%以下になった時、パッシブ回避がもう一度発動する。')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒アオイ　特殊') {
    msg.channel.send('ディバインスラッシュ\nミスティルテインを振り回して前方に範囲ダメージを与える。ダメージを受けた対象は9秒間、回復不可になる。\nガントレットでは回復量分のダメージを受ける。(ボス、艦船は除く)\n有効打撃数:3\nクールタイム:21秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	デバフ効果時間+6秒')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒アオイ　究極') {
    msg.channel.send('ディーサイド・クリービング\nミスティルテインに力を込めて直線上に投げ、前方に複数回範囲ダメージを与える。最初の攻撃でダメージを受けた対象は、永続効果以外のバフがランダムで1個解除される。\nスキル発動後、念動小銃1体を追加で召喚する。\n 有効打撃数:3\nクールタイム:52秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	特殊スキルと究極スキルがパッシブの発動条件に含まれる')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ミナ　パッシブ') {
    msg.channel.send('狼の牙\n出撃時、味方に突進して範囲ダメージを与えた後、半径6m以内の対象に追加ダメージを与える。\n基本攻撃を3回行うと強化攻撃を使用して、ガントレットでは有効打撃数内の艦船を除いた対象に現在のHPの15%の追加ダメージを与える。\n有効打撃数:2\nLv.2	攻撃速度+5%\nLv.3	攻撃速度+5%\nLv.4	攻撃速度+10%\nLv.5	出撃直後4秒間、完全回避状態と攻撃速度+30%、パッシブ発動時に同一効果が発動')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ミナ　特殊') {
    msg.channel.send('ソードブラスター\n対象の敵がいる地点まで突進して剣を振り回し、周辺に範囲ダメージを与えた後、上方にブラスターを発射して追加のダメージを与える。\n最後の攻撃でダメージを受けた敵は、6秒間スキル封印状態になる（ボスは除く）。\n有効打撃数:3\nクールタイム:22秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	クールタイム-4秒、特殊スキルがパッシブ効果の発動条件に追加')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ミナ　究極') {
    msg.channel.send('ウルフズベイン・レガシー\nウルフズベインの力を最大まで引き出して前方に範囲ダメージを与える。\n有効打撃数:4\nクールタイム:52秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	パッシブ発動時、究極スキルのクールタイムが3秒減少')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ユナ　基本攻撃') {
    msg.channel.send('前方に火炎を放ち、範囲ダメージを与える。\nレイリーは基本攻撃を5回行うと、最も遠くにいる敵に範囲ダメージを与え、5秒間攻撃力と攻撃速度を30%減少させる。\nLv.2	基本攻撃ダメージ+5%\nLv.3	基本攻撃ダメージ+5%\nLv.4	基本攻撃ダメージ+5%\nLv.5	基本攻撃ダメージ+5%')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ユナ　パッシブ') {
    msg.channel.send('レイリー\n出撃時、レイリーを召喚する。ユナは自身と周辺の敵(ボス、艦船は除く)のHPを毎秒2%ずつ減少させ、戦場にレイリーがいるとHPを毎秒3%ずつ回復する。\nレイリーは戦闘不能になると各召喚につきHPが一度だけHPが完全回復し、5秒後に復活する。\nLv.2	攻撃力+3%\nLv.3	攻撃力+3%\nLv.4	攻撃力+6%\nLv.5	レイリーが戦闘不能になったとき、5秒間ダメージ減少+50%、特殊スキルと究極スキルのHP回復効果+50%')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ユナ　特殊') {
    msg.channel.send('ソーラーフレイム\n巨大な火柱を噴出させて対象とその周辺に範囲ダメージを与える。\nダメージを受けた敵はバフが解除されて、6秒間バフを受けられない状態になる。\n発動時、戦場にレイリーがいるとHPが10%回復する。\n有効打撃数:3\nクールタイム:20秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	スキル発動時、8秒間ダメージ減少+15%。戦場にレイリーがいると効果が2倍になる。')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ユナ　究極') {
    msg.channel.send('プロミネンス\n太陽の力を集約させた後、前方に放出して範囲ダメージを与える。発動時、戦場にレイリーがいるとHPが20%回復する。\n有効打撃数:4\nクールタイム:52秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	スキル発動後12秒間、攻撃力+15%。戦場にレイリーがいると効果が2倍になる。')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒カナミ　基本攻撃') {
    msg.channel.send('ブラスターを発射して対象とその周辺に範囲ダメージを与える。\n空中近接攻撃はガントレットでは現在のHPの20％の追加ダメージを与える。（艦船は除く）\n有効打撃数:2\nLv.2	基本攻撃ダメージ+5%\nLv.3	基本攻撃ダメージ+5%\nLv.4	基本攻撃ダメージ+5%\nLv.5	空中近接攻撃にダメージを受けた対象が20秒間、受ける回復量-100%')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒カナミ　パッシブ') {
    msg.channel.send('エースの資格\n超高速で戦場に出撃し、ユニット全員にダメージを与える。ガントレットでは艦船を除いた空中の敵に現在のHPの33％の追加ダメージを与える。\n非覚醒カウンターレンジャークラスのユニット全員が特殊スキル以下の硬直免疫を得る。\n有効打撃数:3\nLv.2	vs空中ダメージ及びダメージ減少+10%\nLv.3	vs空中ダメージ及びダメージ減少+10%\nLv.4	vs空中ダメージ及びダメージ減少+20%\nLv.5	バフ効果にスキルチャージ速度+30%を追加')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒カナミ　特殊') {
    msg.channel.send('アーセナルウイング射出\n新型戦術礼装・アーセナルウイングの自立起動武装を射出して、対象とその周辺に範囲ダメージを与える。\nスキル発動後6秒間、最大HPの30％のバリアを生成する。\n有効打撃数:2\nクールタイム:23秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	バリア効果中、ダメージ減少+30%')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒カナミ　究極') {
    msg.channel.send('ストライクコード：KZN\nアーセナルウイングとリアクティブソードを接続し、強力なエネルギーで前方に範囲ダメージを与える。\nスキル発動後12秒間、特殊スキル以下の硬直免疫を得る。\n有効打撃数:3\nクールタイム:48秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	クールタイム-6秒')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ヒルデ　パッシブ') {
    msg.channel.send('ファフニール降臨\n出撃時、半径8m以内の敵を自身が向いている方向へノックバックさせる。自身の視野から3m以上離れている敵に突進し、ぶつかると範囲ダメージを与えて3秒間、ヒルデを攻撃対象にさせる。\n発動時、特殊スキルのクールタイムが3秒減少する。\n有効打撃数:2\nLv.2	HP+5%\nLv.3	HP+5%\nLv.4	HP+10%\nLv.5	出撃時、8秒間味方全員に解除されない最大HPの8%のバリアを生成する。特殊スキルのクールタイムが5秒減少に変化')
    }  
  })

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ヒルデ　特殊') {
    msg.channel.send('レギンの怒り\n後方へ跳躍した後、空中から地面に向かって突進して範囲ダメージを与える。\nスキル発動後、最大HPの25%の解除されないバリアが生成され、バリア維持中はすべての硬直に対し免疫を得る。\n有効打撃数:3\nクールタイム:28秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	バリア効果中にvs相性ダメージ減少+100%')
    }  
  })

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒ヒルデ　究極') {
    msg.channel.send('バスター・オーバードライブ\n前方に突進して最も前にいる敵にぶつかると、一定の距離まで前進して押し出し、範囲ダメージを与える。\nスキル発動後10秒間、受けるダメージが30%減少し、永続効果を除くデバフに免疫を得る。\n有効打撃数:3\nクールタイム:48秒\nLv.2	ダメージ+5%\nLv.3	ダメージ+5%\nLv.4	ダメージ+15%\nLv.5	バフ効果中にクールタイムを無視して特殊スキルを発動')
    }  
  })

client.on('messageCreate', async msg => {
  if (msg.content === '覚醒イチノセ　基本攻撃') {
    msg.channel.send('基本攻撃\n不浄なエネルギーによって前方に範囲ダメージを与える。\n有効打撃数:2\nLv.2	基本攻撃ダメージ+5%\nLv.3	基本攻撃ダメージ+5%\nLv.4	基本攻撃ダメージ+5%\nLv.5	基本攻撃ダメージ+5%')
     }  
  })
  

client.login('TOKEN')