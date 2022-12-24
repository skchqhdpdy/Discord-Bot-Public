const Discord = require('discord.js');
const { json } = require('express');
const client = new Discord.Client();
const { prefix, token } = require("./config.json");

client.setMaxListeners(0)

client.on('ready', () => {
    console.log('초보의 봇#9454 온라인!');
	client.user.setActivity('$명령어, $봇 초대', { type: 'LISTENING' })
});



client.on('message', (message) => {
    if(message.content === `${prefix}명령어`) {

        const embed = new Discord.MessageEmbed()
        .setAuthor("초보의 봇#9454", "https://cdn.discordapp.com/avatars/753682115505160393/1fd2a00a407592b7edde48205351fe14.webp?size=4096")
        .setTitle("명령어")
        .setColor("FF0000")
        
        .setThumbnail("https://cdn.discordapp.com/avatars/753682115505160393/1fd2a00a407592b7edde48205351fe14.webp?size=4096")
        
        .addFields(
            {name:"$명령어", value:"명령어를 보여줍니다."},
            {name:"$pp?b=[Beatmap ID]", value:"RedstarOSU 서버를 통하여(pp계산), 곡 이름과, pp, 길이(?), 난이도, ar, bpm을 보여준다"},
            {name:"$비트맵 변환 [Beatmapset ID]", value:"오스 비트맵셋을 네리냥에서 다운받게 변환 해준다"},
            {name:"반초 비트맵 페이지 링크 --> 네리냥", value:"사용법 \nhttps://osu.ppy.sh/beatmapsets/BeatmapsetID \nhttps://osu.ppy.sh/s/BeatmapsetID \nhttps://osu.ppy.sh/b/BeatmapID"},
            {name:"$봇 초대", value:"봇 초대 주소입니다."},
            {name:"$ping", value:"봇의 서버핑을 보여줍니다."},
            {name:"$투표", value:"O 또는 X 로 투표를 할수있습니다. \n사용법:~투표 투표할 내용"},
            {name:"$출첵", value:"출석체크를 할 수 있습니다. \n관리자가 따로 서비스를 열어야 쓸수 있습니다."},
            {name:"$닉초디코서버", value:"닉초의 디스코드 서버 주소입니다."},
            {name:"$osu", value:"osu! Bancho 프로필 입니다."},
            {name:"$osu debian", value:"R.I.P osu! Debian 서버의 프로필 입니다. (여기서만 오스합니다.)"},
            {name:"$github", value:"닉초 깃허브 페이지 입니다."},
            {name:"$닉초스팀", value:"닉초 스팀 페이지 입니다."},
            {name:"$닉초디코", value:"닉초 디스코드 이름+태그 입니다."},
            {name:"$닉초트위치", value:"닉초 트위치 페이지 입니다."},
            {name:"$닉초유튜브", value:"닉초 유튜브 페이지 입니다."},
            {name:"$닉초 홈페이지", value:"닉초의 홈페이지 입니다."},
        )

        .setTimestamp(new Date())
        .setFooter("Made By anireN Fanboy#9400", "https://cdn.discordapp.com/avatars/399535550832443392/d4ce71aa621422847d980c847b90f240.webp?size=4096")

        message.channel.send(embed);

    }

});

//////////////////////////////////////    $pp?b=1919312 시작    //////////////////////////////////////
client.on('message', (message) => {
    if(message.content.substring(0,6) === `${prefix}pp?b=`) {

        const ppb = message.content.substring(6);
        var http = require('https');
        const scanf = require('scanf');

        console.log(`\ninput:${ppb}\n\n`)

        var ppbsetid // index.js:90
        var options2 = {
            host: 'osu.ppy.sh',
            path: `/api/get_beatmaps?k=4597ac5b5d5f0b3dace4103c6ae0f9a69fccce6b&b=${ppb}`,
            port: '443',
            method: 'GET'
            };
    
            callback2 = function(response2) {
            var str2 = ''
            response2.on('data', function (chunk2) {
                str2 += chunk2;
            });
    
            response2.on('end', function () {
                console.log(str2);
               
                if (str2.substring(0,19) === '[{"beatmapset_id":"') {
                    
                    var setidnum = 19, checkdnum = 0
                    while (checkdnum !== '"') {
                        checkdnum = str2.substring(setidnum, setidnum + 1)
                        setidnum++;
                    }
                    setidnum--;
                    
                    ppbsetid = str2.substring(19, setidnum)
                    
                    console.log(`\nd/${ppbsetid}\n`)
                    
                }
                
                });
            }
    
            var req = http.request(options2, callback2);
            req.end();



            

        var options = {
        host: 'old.redstar.moe',
        path: `/letsapi/v1/pp?b=${ppb}`,
        port: '443',
        method: 'GET'
        };

        callback = function(response) {
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            
            const embed = new Discord.MessageEmbed()
            .setAuthor("초보의 봇#9454", "https://cdn.discordapp.com/avatars/753682115505160393/1fd2a00a407592b7edde48205351fe14.webp?size=4096")
            .addFields(
                {name:`${str}`, value:`https://old.redstar.moe/letsapi/v1/pp?b=${ppb}`}
            )
            .setColor("FF0000")
            .setThumbnail(`https://b.ppy.sh/thumb/${ppbsetid}l.jpg`)
            .setTimestamp(new Date())
            .setFooter("Made By anireN Fanboy#9400", "https://cdn.discordapp.com/avatars/399535550832443392/371d847af6a8cda0eb8fe1d6c2b282ae.webp?size=4096")

            message.reply(embed)
            console.log("\n전송 완료!!")
            });
        }

        var req = http.request(options, callback);
        req.end();

    }
});
//////////////////////////////////////    $pp?b=1919312 끝    //////////////////////////////////////

client.on('message', (message) => {
    if(message.content.substring(0,7) === `${prefix}비트맵 변환`) {

        const d = message.content.substring(8);
        setTimeout(() => {
            message.reply(`https://nerinyan.moe/d/${d}`);
        }, 1000);
        console.log(`\nuse command \n${message.content} --> https://nerinyan.moe/d/${d}`)
    }
});

////////////////////////////////////////////  오스 비트맵  //////////////////////////////////////////////

client.on('message', (message) => {
    if(message.content.substring(0, 31) === `https://osu.ppy.sh/beatmapsets/`) {
        var dnum = 31, checkdnum = 0;
        while (checkdnum !== "#") {
            checkdnum = message.content.substring(dnum, dnum + 1);
            dnum++;
        }
        dnum--;
        
        const d = message.content.substring(31, dnum);
        setTimeout(() => {
            message.reply(`https://nerinyan.moe/d/${d}`);
        }, 1000);
        console.log(`\nuse 'beatmapsets' link \n${message.content} --> https://nerinyan.moe/d/${d}`)

    }
});

client.on('message', (message) => {
    if(message.content.substring(0, 21) === `https://osu.ppy.sh/s/` || message.content.substring(0, 21) === `https://osu.ppy.sh/b/`) {
       if(message.content.substring(19, 20) === "s"){
           var sb = 'd';
       }
       else if(message.content.substring(19, 20) === "b"){
           var sb = 'b';
       }

        const d = message.content.substring(21);
            setTimeout(() => {
                message.reply(`https://nerinyan.moe/${sb}/${d}`);
            }, 1000);
            console.log(`\nuse '${message.content.substring(19, 20)}' link \n${message.content} --> https://nerinyan.moe/${sb}/${d}`)
    }
});

////////////////////////////////////////////  오스 비트맵 끝  //////////////////////////////////////////////

client.on('message', (message) => {
    if(message.content.substring(0,3) === `${prefix}투표`) {
        
        const 투표내용 /*(변수)*/ = message.content.substring(3);

        const embed = new Discord.MessageEmbed()
        .setAuthor("초보의 봇#9454", "https://cdn.discordapp.com/avatars/753682115505160393/1fd2a00a407592b7edde48205351fe14.webp?size=4096")
        .setTitle("👇 투표내용  (Voting contents)")
        .setDescription(투표내용)
        .setColor("FF0000")

        .setThumbnail("https://cdn.discordapp.com/avatars/753682115505160393/1fd2a00a407592b7edde48205351fe14.webp?size=4096")

        message.reply(embed)
        .then((msg) => {
            msg.react("⭕")
            msg.react("❌")
        });
    }
});

client.on('message', (message) => {
    if(message.content === `${prefix}닉초 홈페이지`) {

        const embed = new Discord.MessageEmbed()
        .setAuthor("초보의 봇#9454", "https://cdn.discordapp.com/avatars/753682115505160393/1fd2a00a407592b7edde48205351fe14.webp?size=4096")
        .setTitle("명령어")
        .setColor("FF0000")
        
        .setThumbnail("https://cdn.discordapp.com/avatars/753682115505160393/1fd2a00a407592b7edde48205351fe14.webp?size=4096")
        
        .addFields(
            {name:"https://redstar.moe", value:"osu! private server 'Redstar'"},
            {name:"https://aodd.moe", value:"cloudflare \nMaybe No Signal"},
            {name:"https://aodd.xyz", value:"Maybe No Signal"},
            {name:"http://skchqhdpdy.kro.kr", value:"이제 안씀"},
        )

        .setTimestamp(new Date())
        .setFooter("Made By anireN Fanboy#9400", "https://cdn.discordapp.com/avatars/399535550832443392/d4ce71aa621422847d980c847b90f240.webp?size=4096")

        message.channel.send(embed);

    }

});

client.on('message', (message) => {
    if(message.content === `${prefix}봇 초대`) {
        message.reply('https://discord.com/api/oauth2/authorize?client_id=753682115505160393&permissions=8&scope=bot')
    }

    if(message.content === `${prefix}ping`) {
        const timeTake = Date.now() - message.createdTimestamp;
        message.reply(`서버핑은 **${timeTake}ms** 입니다.`);
        console.log(`서버핑은 **${timeTake}ms** 입니다.`);
    }
});

client.on('message', (message) => {
    if(message.content === `${prefix}osu`) {
        message.reply('https://osu.ppy.sh/users/16732123')
    }

    if(message.content === `${prefix}osu debian`) {
        message.reply('R.I.P \nhttps://debian.moe/rx/u/8016')
    }
});

client.on('message', (message) => {
    if(message.content === `${prefix}github`) {
        message.reply('https://github.com/skchqhdpdy')
    }

    if(message.content === `${prefix}닉초디코서버`) {
        message.reply('https://discord.aodd.moe')
    }

    if(message.content === `${prefix}닉초디코`) {
        message.reply('anireN Fanboy#9400')
    }

    if(message.content === `${prefix}닉초스팀`) {
        message.reply('https://steamcommunity.com/id/skchqhdpdy')
    }

    if(message.content === `${prefix}닉초트위치`) {
        message.reply('http://www.twitch.tv/skchqhdpdy2')
    }

    if(message.content === `${prefix}닉초유튜브`) {
        message.reply('https://www.youtube.com/channel/UCGLxIW0MDRAYrK-pDugCsnA')
    }

});


client.login(token);