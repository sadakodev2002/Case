// STALK
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
