export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg";


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY,
    }
  };


  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";


  export const STD_LANGUAGE = [
        {identifier:"en", name:'English'},
        {identifier:"hindi", name:'हिंदी'},
        {identifier:"gem", name:'Deutsch'},
        {identifier:"spn", name:'Spanish'},
        {identifier:"ko", name:'한국인'},
        {identifier:"tk", name:'Türkçe'},
        {identifier:"cn", name:'中国人'},
        {identifier:"kn", name:'ಕನ್ನಡ'},
        {identifier:"tg", name:'తెలుగు'},
        {identifier:"tm", name:'Tதமிழ்'},
        {identifier:"ml", name:'മലയാളം'},
        {identifier:"fn", name:'Français'},
        {identifier:"it", name:'Italiano'},
        {identifier:"ab", name:'عربي'},
        {identifier:"jp", name:'日本語'},
        {identifier:"pb", name:'Punjabi'},
        {identifier:"ru", name:'Russian'},
      ]



      export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;


      export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;

      export const FB_KEY = process.env.REACT_APP_FB_KEY;