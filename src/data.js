import intersteller from './moviesImg/intersteller.jpg';
import scam1992 from  './moviesImg/scam1992.jpg';
import shawsank from './moviesImg/shawsank.jpg';
import thebigshort from  './moviesImg/thebigshort.png';
import titanic from  './moviesImg/titanic.jpg';

export const data = [
    {
        id:1,
        name:'intersteller',
        details:'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
        cast:[{
            image:scam1992,
            cname:'Matthew Cooper'
        },{
            image:scam1992,
            cname:'Anne Hathaway'
        },{
            image:scam1992,
            cname:'Jessica Chastain'
        }],
        Genre:'Sci-fi',
        poster:intersteller,
        duration: '2.5 hrs',
        videocard:intersteller,
        screenshots:[intersteller,intersteller,intersteller,intersteller,intersteller]
    },
    {
        id:2,
        name:'scam 1992',
        details:'Scam 1992: The Harshad Mehta Story is an Indian Hindi-language financial thriller streaming television series on SonyLIV directed by Hansal Mehta',
        cast:[{
            image:intersteller,
            cname:'Shreya Dhanwa'
        },{
            image:intersteller,
            cname:'Shreya Dhanwa'
        },{
            image:intersteller,
            cname:'Anjali Barot'
        }],
        Genre:'stock',
        poster:scam1992,
        duration: '2 hrs',
        videocard:scam1992,
        screenshots:[scam1992,scam1992,scam1992,scam1992,scam1992]
    },
    {
        id:3,
        name:'shawsank redemption',
        details:'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.',
        cast:[{
            image:intersteller,
            cname:'Morgan Freeman'
        },{
            image:intersteller,
            cname:'Tim Robins'
        },{
            image:intersteller,
            cname:'Bob Gunton'
        }],
        Genre:'prison',
        poster:shawsank,
        duration: '3 hrs',
        videocard:shawsank,
        screenshots:[shawsank,shawsank,shawsank,shawsank,shawsank]
    },
    {
        id:4,
        name:'the big short',
        details:'The Big Short is a 2015 American biographical comedy-drama film directed by Adam McKay. Written by McKay and Charles Randolph, it is based on the 2010 book.',
        cast:[{
            image:intersteller,
            cname:'Brad Freeman'
        },{
            image:intersteller,
            cname:'Tim Ghosling'
        },{
            image:intersteller,
            cname:'Bob Chirstian'
        }],
        Genre:'stock',
        poster:thebigshort,
        duration: '2.5 hrs',
        videocard:thebigshort,
        screenshots:[thebigshort,thebigshort,thebigshort,thebigshort,thebigshort]
    },
    {
        id:5,
        name:'titanic',
        details:'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.',
        cast:['kate','leonardo','Bill'],
        cast:[{
            image:intersteller,
            cname:'kate '
        },{
            image:intersteller,
            cname:'leonardo'
        },{
            image:intersteller,
            cname:'Bill'
        }],
        Genre:'ship',
        poster:titanic,
        duration: '3 hrs',
        videocard:titanic,
        screenshots:[titanic,titanic,titanic,titanic,titanic]
    },
]
