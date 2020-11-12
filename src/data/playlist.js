import track1 from '../audio-files/neobeshala.mp3'
import cover1 from '../images/cover1.jpg';
import track2 from '../audio-files/stuardess.mp3'
import cover2 from '../images/cover2.jpg';
import track3 from '../audio-files/apocalypse.mp3'
import cover3 from '../images/cover3.jpg';

const playList = [
    {
        title: 'Не обещала',
        author: 'Моя Мишель',
        audioFile: track1,
        link: 'https://www.youtube.com/',
        cover: cover1,
        text: `
Электронная метель
За окном осадки, но не те
Это шум от машин и людей
        
И на завтрак сладкий чай
До свидания, но не прощай
Я вернусь через час, через день
        
Я не обещала и столько нежных слов
Роняла, но не обещала – на тысячу углов
Сломалась, но не обещала любить тебя всегда
Я, нет, обещала…`,
        id: 1
    },
    {
        title: 'Стюардесс',
        author: 'Моя Мишель',
        audioFile: track2,
        link: '',
        cover: cover2,
        text: `
Вор – ты украл мое сердце
Ты бежишь, оно бьется
В кармане, в кармане
В кармане, в кармане
            
Спорт, мы забыли одеться
Только мысль крадется
Обманет, обманет
Обманет, обманет`,
        id: 2
    },
    {
        title: 'Apocalypse',
        author: 'Cigarettes After Sex',
        audioFile: track3,
        link: 'https://www.youtube.com/',
        cover: cover3,
        text: `
You leapt from crumbling bridges watching cityscapes turn to dust
Filming helicopters crashing in the ocean from way above
Got the music in you baby, tell me why
You've been locked in here forever and you just can't say goodbye
Kisses on the foreheads of the lovers wrapped in your arms
Got the music in you baby, tell me why
Got the music in you baby, tell me why
You've been locked in here forever and you just can't say goodbye
Your lips, my lips, apocalypse
Your lips, my lips, apocalypse
Go and sneak us through the rivers flood is rising up on your knees, oh please
Come out and haunt me, I know you want me
Come out and haunt me
Sharing all your secrets…,`,
        id: 3
    }
]

export default playList;
