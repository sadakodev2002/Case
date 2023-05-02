// CASE STALK
case 'stalkig':
if (args.length == 0) return reply(`Example: ${prefix + command} cosplaykawai`)
axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Full Name : ${data.result.fullname}\n`
caption += `Posts : ${data.result.posts}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Following : ${data.result.following}\n`
caption += `Bio : ${data.result.bio}`
conn.sendMessage(from, { image: { url: data.result.photo_profile }, caption })
})
break
case 'stalkgithub':
if (args.length == 0) return reply(`Example: ${prefix + command} sadakodev2002`)
axios.get(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Name : ${data.result.name}\n`
caption += `Link : ${data.result.url}\n`
caption += `Public Repo : ${data.result.public_repos}\n`
caption += `Public Gists : ${data.result.public_gists}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Following : ${data.result.following}\n`
caption += `Bio : ${data.result.bio}`
conn.sendMessage(from, { image: { url: data.result.avatar }, caption })
})
break
case 'stalktwitter':
if (args.length == 0) return reply(`Example: ${prefix + command} senyamiku`)
axios.get(`https://api.lolhuman.xyz/api/twitter/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.screen_name}\n`
caption += `Name : ${data.result.name}\n`
caption += `Tweet : ${data.result.tweet}\n`
caption += `Joined : ${data.result.joined}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Following : ${data.result.following}\n`
caption += `Like : ${data.result.like}\n`
caption += `Description : ${data.result.description}`
conn.sendMessage(from, { image: { url: data.result.profile_picture }, caption })
})
break
case 'stalktiktok':
if (args.length == 0) return reply(`Example: ${prefix + command} danukiding`)
axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
var caption = `Username : ${data.result.username}\n`
caption += `Nickname : ${data.result.nickname}\n`
caption += `Followers : ${data.result.followers}\n`
caption += `Followings : ${data.result.followings}\n`
caption += `Likes : ${data.result.likes}\n`
caption += `Video : ${data.result.video}\n`
caption += `Bio : ${data.result.bio}\n`
conn.sendMessage(from, { image: { url: data.result.user_picture }, caption })
})
break
// CASE STIKER
case 'stickerwa':
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
axios.get(`https://api.lolhuman.xyz/api/stickerwa?apikey=${apikey}&query=${args}`).then(({ data }) => {
let pack = data.result.random()
let sticker = pack.stickers.random()
conn.sendMessage(from, { sticker: { url: `https://api.lolhuman.xyz/api/convert/towebp?apikey=${apikey}&img=${sticker}` }, caption })
})
break
case 'telesticker':
if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
axios.get(`https://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
conn.sendMessage(from, { sticker: { url: data.result.sticker.random() } })
})
break
// ISLAMIC
case 'listsurah':
axios
.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
.then(({ data }) => {
var text = 'List Surah:\n'
for (var x in data.result) {
text += `${x}. ${data.result[x]}\n`
}
reply(text)
})
.catch(console.error)
break
case 'alquran':
if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
reply(text)
})
.catch(console.error)
break
case 'alquranaudio':
if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
conn.sendMessage(from, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}` }, mimetype: 'audio/mp4' })
break
case 'asmaulhusna':
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
.then(({ data }) => {
var text = `No : ${data.result.index}\n`
text += `Latin: ${data.result.latin}\n`
text += `Arab : ${data.result.ar}\n`
text += `Indonesia : ${data.result.id}\n`
text += `English : ${data.result.en}`
reply(text)
})
.catch(console.error)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${full_args}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
reply(text)
})
.catch(console.error)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Example: ${prefix + command} Medan`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${apikey}`)
.then(({ data }) => {
var text = `Wilayah : ${data.result.wilayah}\n`
text += `Tanggal : ${data.result.tanggal}\n`
text += `Sahur : ${data.result.sahur}\n`
text += `Imsak : ${data.result.imsak}\n`
text += `Subuh : ${data.result.subuh}\n`
text += `Terbit : ${data.result.terbit}\n`
text += `Dhuha : ${data.result.dhuha}\n`
text += `Dzuhur : ${data.result.dzuhur}\n`
text += `Ashar : ${data.result.ashar}\n`
text += `Maghrib : ${data.result.imsak}\n`
text += `Isya : ${data.result.isya}`
reply(text)
})
.catch(console.error)
break
