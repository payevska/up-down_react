import tableActuator from "./images/tables/actuator/table-actuator-desktop.png";
import imgTA1 from "./images/tables/actuator/table-actuator-big1.png";
import imgTA2 from "./images/tables/actuator/table-actuator-big2.png";
import imgTA3 from "./images/tables/actuator/table-actuator-big3.png";
import imgTA4 from "./images/tables/actuator/table-actuator-big4.png";
import imgTA5 from "./images/tables/actuator/table-actuator-big5.png";
import imgTA6 from "./images/tables/actuator/table-actuator-big6.png";
import imgTA7 from "./images/tables/actuator/table-actuator-big7.png";
import imgTA8 from "./images/tables/actuator/table-actuator-big8.png";
import imgTA9 from "./images/tables/actuator/table-actuator-charaktaristic.png";
import imgTA10 from "./images/tables/actuator/table-actuator-charaktaristic2.png";


import tableComputer from "./images/tables/computer/table-computer-desktop.png";
import imgTC1 from "./images/tables/computer/table-computer-big1.png";
import imgTC2 from "./images/tables/computer/table-computer-big2.png";
import imgTC3 from "./images/tables/computer/table-computer-big3.png";
import imgTC4 from "./images/tables/computer/table-computer-big4.png";
import imgTC5 from "./images/tables/computer/table-computer-big5.png";
import imgTC6 from "./images/tables/computer/table-computer-big6.png";
import imgTC7 from "./images/tables/computer/table-computer-big6.png";
import imgTC8 from "./images/tables/computer/table-computer-big6.png";
import imgTC9 from "./images/tables/computer/table-computer-charaktaristic1.png";
import imgTC10 from "./images/tables/computer/table-computer-charaktaristic2.png";

import tableLaptop from "./images/tables/laptop/Table-laptop2.png";
import imgTL1 from "./images/tables/laptop/table-laptop-big1.png";
import imgTL2 from "./images/tables/laptop/table-laptop-big2.png";
import imgTL3 from "./images/tables/laptop/table-laptop-big3.png";
import imgTL4 from "./images/tables/laptop/table-laptop-big4.png";
import imgTL5 from "./images/tables/laptop/table-laptop-big5.png";
import imgTL6 from "./images/tables/laptop/table-laptop-big6.png";
import imgTL7 from "./images/tables/laptop/table-laptop-big7.png";
import imgTL8 from "./images/tables/laptop/table-laptop-big8.png";
import imgTL9 from "./images/tables/laptop/table-laptop-charaktaristic2.png";
import imgTL10 from "./images/tables/laptop/table-laptop-charaktaristic1.png";

import penHolder from "./images/accessory/pen-holder.png";
import imgPH1 from "./images/accessory/pen-holder.png";

import penHolderPrism from "./images/accessory/pen-holder-prism1.png";
import imgPHP1 from "./images/accessory/pen-holder-prism1.png";

import penHolderCircle from "./images/accessory/pen-holder-circle1.png";
import imgPHC1 from "./images/accessory/pen-holder-circle1.png";

import mobileHolderCubic from "./images/accessory/mobile-holder-wood2.png";
import imgMHC1 from "./images/accessory/mobile-holder-wood2.png";

import mobileHolderCubicSlot from "./images/accessory/mobile-holder-wood3.png";
import imgMHCS1 from "./images/accessory/mobile-holder-wood3.png";

import mobileHolderTron from "./images/accessory/mobile-holder-metal1.png";
import imgMHT1 from "./images/accessory/mobile-holder-metal1.png";

import legsTable from "./images/legs/legs_for_table-2.png";
import imgLT1 from "./images/legs/legs_for_table-2.png";
import imgLT2 from "./images/legs/legs_for_table-1.png";
import imgLT3 from "./images/legs/legs_for_table-3.png";
import imgLT4 from "./images/legs/legs_for_table-1.png";
import imgLT5 from "./images/legs/legs_for_table-1.png";
import imgLT6 from "./images/legs/legs_for_table-1.png";
import imgLT7 from "./images/legs/legs_for_table-1.png";
import imgLT8 from "./images/legs/legs_for_table-1.png";
import imgLT9 from "./images/legs/legs_for_table-characteristic1.png";
import imgLT10 from "./images/legs/legs_for_table-characteristic2.png";



export default [
    {
        sys: {
            id: "1"
        },
        fields: {
            name: "Стол для работы стоя и сидя",
            slug: "Up-Down Actuator",
            type: "столы для работы стоя",
            price: 6000,
            minHeight: 165,
            maxHeight: 475,
            width: 860,
            depth: 650,
            addition: "столешницы",
            available: "под заказ",
            material: [
                "сосна",
                "бук",
                "дуб"
            ],
            adjustHeight: true,
            testing: true,
            updown: true,
            description:
                "Данный стол предназначен для комбинированной работы как сидя, так и стоя. Представляемая модель устанавливается на основной рабочий стол. Благодаря своим компактным размерам он легко разместится на Вашем столе даже в небольшом офисе. Расположив на верхней столешнице монитор, а на полке клавиатуру при помощи кнопки Вы можете поднять все необходимое оборудование на комфортную для вас высоту, не прилагая никаких усилий.",
            extras: [
                "Бесплатное тестирование для Харькова"
            ],
            characteristics: [
                {information: "Габариты в сложенном состоянии", figures: "860х650"},
                {information: "Высота столешницы в сложенном виде", figures: "165мм"},
                {information: "Высота столешницы в поднятом виде", figures: "475мм"},
                {information: "Возможность плавной подстройки удобной высоты под свой рост в этом диапазоне", figures: "да"},
                {information: "Размер столешницы", figures: "860х550"},
                {information: "Размер нижней полки", figures: "640х300"},
                {information: "Материал столешницы и полки", figures: "сосна"},
                {information: "Блок питания 12V", figures: "в комплекте"},
                {information: "Масса", figures: "19 кг"}
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: tableActuator
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA4
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA5
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA6
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA7
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA8
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA9
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTA10
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "2"
        },
        fields: {
            name: "Стол для работы стоя",
            slug: "Up-Down Computer",
            type: "столы для работы стоя",
            price: 1800,
            size: "1000x550x550",
            sizeTopShelf: "900x260",
            sizeBottomShelf: "1000x275",
            heightTopShelf: "от 435мм до 535мм",
            heightBottomShelf: "от 150мм до 315мм",
            maxHeight: 475,
            Width: 860,
            depth: 650,
            weight: "6 кг",
            addition: "изделия",
            available: "под заказ",
            material: ["фанера 12мм"],
            adjustHeight: true,
            testing: false,
            updown: true,
            description:
                "Эта модель стола изготовлена из мебельной фанеры толщиной 12мм. И состоит из 6 составных частей. Для сборки не нужен никакой инструмент. Достаточно вставить необходимые детали в соответствующие пазы и стол готов к использованию. Нижняя и верхняя полка регулируются в соответствии с Вашим желанием. После работы стол просто разбирается и не занимает в сложенном виде много места.",
                characteristics: [
                    {information: "Габариты в собранном состоянии", figures: "1000х550x550"},
                    {information: "Размер верхней полки", figures: "900х260"},
                    {information: "Размер нижней полки", figures: "1000х275"},
                    {information: "Диапазон регулировки верхней полки", figures: "от 435мм до 535мм"},
                    {information: "Диапазон регулировки нижней полки", figures: "от 150мм до 315мм"},
                    {information: "Материал столешницы и полки", figures: "фанера"},
                    {information: "Масса", figures: "6 кг"}
                ],
                images: [
                {
                    fields: {
                        file: {
                            url: tableComputer
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC4
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC5
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC6
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC7
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC8
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC9
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTC10
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "3"
        },
        fields: {
            name: "Подставка под ноутбук",
            slug: "Up-Down Laptop",
            type: "столы для работы стоя",
            price: 850,
            size: "600x450x300",
            sizeShelf: "600x300",
            adjustHeightShelf: "от 155мм до 405мм",
            angleDownShelf: 45,
            weight: 3,
            addition: "изделия",
            available: "под заказ",
            material: ["фанера 12мм"],
            adjustHeight: true,
            testing: false,
            updown: true,
            description:
                "Данная подставка является трансформером и может использоваться для разных целей: как подставка для ноутбука с регулировкой высоты полки, как подставка под планшет или книгу с наклоном полки в 45 градусов. Так же можно переставить полку вниз под углом 45 градусов и ставить книги для чтения сидя.",
                characteristics: [
                    {information: "Габариты в собранном состоянии", figures: "600х450x300"},
                    {information: "Размер полки", figures: "600х300"},
                    {information: "Диапазон регулировки полки", figures: "от 155мм до 405мм"},
                    {information: "Угол наклона полки в положении планшета", figures: "45°"},
                    {information: "Материал столешницы и полки", figures: "фанера"},
                    {information: "Масса", figures: "3 кг"}
                ],
                images: [
                {
                    fields: {
                        file: {
                            url: tableLaptop
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL4
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL5
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL6
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL7
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL8
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL9
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgTL10
                        }
                    }
                }
            ]
        }
    },
    {
        sys: {
            id: "4"
        },
        fields: {
            name: "Подставка для ручек",
            slug: "Pen-holder Square",
            type: "подставка для ручек",
            price: 150,
            height: 0,
            width: 0,
            radius: 0,
            addition: "изделия",
            available: "под заказ",
            material: ["фанера 12мм"],
            characteristics: [
                {information: "Высота", figures: "-"},
                {information: "Ширина", figures: "-"},
                {information: "Материал", figures: "фанера 12мм"},
                {information: "Масса", figures: "-"}
            ],
            accessories: true,
            description: "",
            images: [
                {
                    fields: {
                        file: {
                            url: penHolder
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPH1
                        }
                    }
                },

            ]
        }
    },
    {
        sys: {
            id: "5"
        },
        fields: {
            name: "Подставка для ручек",
            slug: "Pen-holder Prism",
            type: "подставка для ручек",
            price: 150,
            height: 0,
            width: 0,
            radius: 0,
            addition: "изделия",
            available: "под заказ",
            material: ["фанера 12мм"],
            characteristics: [
                {information: "Высота", figures: "-"},
                {information: "Ширина", figures: "-"},
                {information: "Материал", figures: "фанера 12мм"},
                {information: "Масса", figures: "-"}
            ],
            accessories: true,
            description: "",
            images: [
                {
                    fields: {
                        file: {
                            url: penHolderPrism
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHP1
                        }
                    }
                },
            ]
        }
    },
    {
        sys: {
            id: "6"
        },
        fields: {
            name: "Подставка для ручек",
            slug: "Pen-holder Circul",
            type: "подставка для ручек",
            price: 150,
            height: 0,
            width: 0,
            radius: 0,
            addition: "изделия",
            available: "под заказ",
            material: ["фанера 12мм"],
            characteristics: [
                {information: "Высота", figures: "-"},
                {information: "Ширина", figures: "-"},
                {information: "Материал", figures: "фанера 12мм"},
                {information: "Масса", figures: "-"}
            ],
            accessories: true,
            description: "",
            images: [
                {
                    fields: {
                        file: {
                            url: penHolderCircle
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgPHC1
                        }
                    }
                },
            ]
        }
    },
    {
        sys: {
            id: "7"
        },
        fields: {
            name: "Подставка под мобильный телефон",
            slug: "Mobile-holder Cubic",
            type: "подставка под мобильный телефон",
            price: 70,
            size: "0x0x0",
            addition: "изделия",
            available: "под заказ",
            material: ["фанера 12мм"],
            characteristics: [
                {information: "Высота", figures: "-"},
                {information: "Ширина", figures: "-"},
                {information: "Материал", figures: "фанера 12мм"},
                {information: "Масса", figures: "-"}
            ],
            accessories: true,
            description: "",
            images: [
                {
                    fields: {
                        file: {
                            url: mobileHolderCubic
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHC1
                        }
                    }
                },

            ]
        }
    },
    {
        sys: {
            id: "8"
        },
        fields: {
            name: "Подставка под мобильный телефон",
            slug: "Mobile-holder Cubic-slot",
            type: "подставка под мобильный телефон",
            price: 70,
            size: "0x0x0",
            addition: "изделия",
            available: "под заказ",
            material: ["фанера 12мм"],
            characteristics: [
                {information: "Высота", figures: "-"},
                {information: "Ширина", figures: "-"},
                {information: "Материал", figures: "фанера 12мм"},
                {information: "Масса", figures: "-"}
            ],
            accessories: true,
            description: "",
            images: [
                {
                    fields: {
                        file: {
                            url: mobileHolderCubicSlot
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHCS1
                        }
                    }
                },

            ]
        }
    },
    {
        sys: {
            id: "9"
        },
        fields: {
            name: "Подставка под мобильный телефон",
            slug: "Mobile-holder Tron",
            type: "подставка под мобильный телефон",
            price: 140,
            size: "0x0x0",
            addition: "изделия",
            available: "под заказ",
            material: ["фанера 12мм"],
            addition: " изделия",
            characteristics: [
                {information: "Высота", figures: "-"},
                {information: "Ширина", figures: "-"},
                {information: "Материал", figures: "фанера 12мм"},
                {information: "Масса", figures: "-"}
            ],
            accessories: true,
            description: "",
            images: [
                {
                    fields: {
                        file: {
                            url: mobileHolderTron
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgMHT1
                        }
                    }
                },
            ]
        }
    },
    {
        sys: {
            id: "10"
        },
        fields: {
            name: "Опора для стола",
            slug: "Legs-table",
            type: "опора для стола",
            price: 2000,
            height: "под заказ",
            width: "под заказ",
            depth: "под заказ",
            addition: "изделия",
            available: "под заказ",
            material: [
                "профильная труба"
            ],
            legs: true,
            description:
                "",
            extras: [
                "изготовление по размерам заказчика"
            ],
            characteristics: [
                {information: "Высота", figures: "размеры заказчика"},
                {information: "Ширина", figures: "размеры заказчика"},
                {information: "Глубина", figures: "размеры заказчика"},
                {information: "Материал", figures: "профильная труба"},
                {information: "Масса", figures: "в зависимости от размера опоры"}
            ],
            images: [
                {
                    fields: {
                        file: {
                            url: legsTable
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT1
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT2
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT3
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT4
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT5
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT6
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT7
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT8
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT9
                        }
                    }
                },
                {
                    fields: {
                        file: {
                            url: imgLT10
                        }
                    }
                }
            ]
        }
    }
];






