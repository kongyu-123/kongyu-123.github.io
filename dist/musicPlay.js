const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: 'Five hundred Miles',
            artist: 'Justin Timberlake&Carey Mulligan&Stark Sands',
            url: 'https://www.ytmp3.cn/down/76200.mp3',
            cover: '/assets/five.jpg',
            lrc: '/./dist/music/lrc/29751409.lrc',
            theme: '#46718b'
        },
        {
            name: '广东十年爱情故事',
            artist: '广东雨神',
            url: 'https://www.ytmp3.cn/down/53621.mp3',
            cover: '/assets/guangdong.jpg',
            theme: '#46718b'
        },
       {
            name: 'Rain After Summer',
            artist: '羽肿',
            url: 'http://music.163.com/song/media/outer/url?id=430685732.mp3',
            cover: '/assets/yuzhong.jpg',
            theme: '#46718b'
        },
		{
            name: '暖暖',
            artist: '窜天猴少女组',
            url: 'http://music.163.com/song/media/outer/url?id=1336866429.mp3',
            cover: '/assets/nn.jpg',
            lrc: '/./dist/music/lrc/38689229.lrc',
	    theme: '#46718b'
        },
		{
            name: '素颜',
            artist: '许嵩',
            url: 'http://music.163.com/song/media/outer/url?id=167827.mp3',
            cover: '/assets/shuyan.jpg',
           // lrc: '/./dist/music/lrc/38689234.lrc',
	    theme: '#46718b'
        },
		{
            name: '山楂树之念',
            artist: '程佳佳',
            url: 'http://music.163.com/song/media/outer/url?id=1381755293.mp3',
            cover: '/assets/shanzhashuzhinian.jpg',
	    lrc: '/./dist/music/lrc/湘南乃風-Just Live More.lrc',
            theme: '#46718b'
        }
    ]
});