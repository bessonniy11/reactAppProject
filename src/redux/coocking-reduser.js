const SET_SKILLS = 'SET_SKILLS';
const REDACTOR_TITLE = 'REDACTOR_TITLE';

let initialState = {
    specialities: [
        {
            id: 6,
            name: 'Добавить блюдо...',
            recipe: 'Добавить рецепт...',
            src: 'Добавить?',
        },
        {
            id: 1,
            name: 'Пюре',
            recipe: '1.5 кг картошки, молоко',
            src: 'http://октябрь45.рф/wp-content/uploads/2015/10/598.png',
        },
        {
            id: 2,
            name: 'Окрошка',
            recipe: "0.5 кг картошки, 2 л кефира, редиска, яйца, зелень, минералка",
            src: 'https://avatars.mds.yandex.net/get-pdb/251121/0cd84cee-5399-4f33-8e48-b59393e0e7e7/s1200?webp=false',
        },
        {
            id: 3,
            name: 'Плов или рис',
            recipe: 'Пачка риса, пачка мяса, лук, морковь, чеснок',
            src: 'https://www.forumhouse.ru/warehouse/media_theme_of_week_image/s534/000/002/513/534/original.png',
        },
        {
            id: 4,
            name: 'Бунито',
            recipe: "Корейская морковь, яйца, курица",
            src: 'https://img-fotki.yandex.ru/get/9150/220589027.c/0_108991_cdfd9244_M.png',
        },
        {
            id: 5,
            name: 'Макароны',
            recipe: 'Макароны, фарш, лук',
            src: 'https://www.pngarts.com/files/1/Macaroni-PNG-Image-with-Transparent-Background.png'
        },
        {
            id: 6,
            name: 'Фаршированный перец',
            recipe: '8-9 перцев, фарш, рис, лук, морковь, зелень, томатная паста',
            src: 'https://brovaryfood.com.ua/files/products/1332-001_1.500x500.png',
        },
        {
            id: 7,
            name: 'Ёбанное ничего',
            recipe: 'Для этого ничего не требуется',
            src: 'http://cdn.onlinewebfonts.com/svg/img_421310.png'
        },
        {
            id: 1,
            name: 'Пюре',
            recipe: '1.5 кг картошки, молоко',
            src: 'http://октябрь45.рф/wp-content/uploads/2015/10/598.png',
        },
        {
            id: 2,
            name: 'Окрошка',
            recipe: "0.5 кг картошки, 2 л кефира, редиска, яйца, зелень, минералка",
            src: 'https://avatars.mds.yandex.net/get-pdb/251121/0cd84cee-5399-4f33-8e48-b59393e0e7e7/s1200?webp=false',
        },
        {
            id: 3,
            name: 'Плов или рис',
            recipe: 'Пачка риса, пачка мяса, лук, морковь, чеснок',
            src: 'https://www.forumhouse.ru/warehouse/media_theme_of_week_image/s534/000/002/513/534/original.png',
        },
        {
            id: 4,
            name: 'Бунито',
            recipe: "Корейская морковь, яйца, курица",
            src: 'https://img-fotki.yandex.ru/get/9150/220589027.c/0_108991_cdfd9244_M.png',
        },
        {
            id: 5,
            name: 'Макароны',
            recipe: 'Макароны, фарш, лук',
            src: 'https://www.pngarts.com/files/1/Macaroni-PNG-Image-with-Transparent-Background.png'
        },
        {
            id: 6,
            name: 'Фаршированный перец',
            recipe: '8-9 перцев, фарш, рис, лук, морковь, зелень, томатная паста',
            src: 'https://brovaryfood.com.ua/files/products/1332-001_1.500x500.png',
        },
        {
            id: 7,
            name: 'Ёбанное ничего',
            recipe: 'Для этого ничего не требуется',
            src: 'http://cdn.onlinewebfonts.com/svg/img_421310.png'
        },
        {
            id: 1,
            name: 'Пюре',
            recipe: '1.5 кг картошки, молоко',
            src: 'http://октябрь45.рф/wp-content/uploads/2015/10/598.png',
        },
        {
            id: 2,
            name: 'Окрошка',
            recipe: "0.5 кг картошки, 2 л кефира, редиска, яйца, зелень, минералка",
            src: 'https://avatars.mds.yandex.net/get-pdb/251121/0cd84cee-5399-4f33-8e48-b59393e0e7e7/s1200?webp=false',
        },
        {
            id: 3,
            name: 'Плов или рис',
            recipe: 'Пачка риса, пачка мяса, лук, морковь, чеснок',
            src: 'https://www.forumhouse.ru/warehouse/media_theme_of_week_image/s534/000/002/513/534/original.png',
        },
        {
            id: 4,
            name: 'Бунито',
            recipe: "Корейская морковь, яйца, курица",
            src: 'https://img-fotki.yandex.ru/get/9150/220589027.c/0_108991_cdfd9244_M.png',
        },
        {
            id: 5,
            name: 'Макароны',
            recipe: 'Макароны, фарш, лук',
            src: 'https://www.pngarts.com/files/1/Macaroni-PNG-Image-with-Transparent-Background.png'
        },


    ],
    // newTitleText: ''
};

const coockingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SKILLS: {
            return {
                ...state,
                specialities: action.specialities
            }
        }
        case REDACTOR_TITLE: {
            return {
                ...state,
                newTitleText: action.specialities.newNameText
            }
        }
        default:
            return state;
    }
};

export const setCoockingScills = (specialities) => ({type: SET_SKILLS, specialities});
export const redactorTitleAC = (text) => ({type: REDACTOR_TITLE, newNameText: text})

export default coockingReducer;