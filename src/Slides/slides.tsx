import * as React from 'react';
import { HeadingSlide} from '../components/Slide/Slide';

export const Slide_1 = (props) => {
    const { par = "" ,title, content, URL, num } = props
    return (
        <section className={`storys ${par}`}>
            <div className="imgBx">
                <img src={URL} alt="" />
            </div>
            <div className="storyBx">
                <h2>{num+1}:   {title}</h2>
                <p>
                    {content}
                </p>
            </div>
        </section>
    )
}


export const Slide_2 = (props) => {
    const { title, content, URL , num } = props
    return (
        <section className={`storys par`}>
            <div className="storyBx">
                <h2>{num+1}:   {title}</h2>
                <p>
                    {content}
                </p>
            </div>
            <div className="imgBx">
                <img src={URL} alt="" />
            </div>
        </section>
    )
}

const SLIDES_INFO = [
    {
        "title": "Importancia del pan en el Mundo",
        "content": "El pan es un alimento básico y símbolo cultural, presente en todas las comidas y tradiciones. Su relevancia histórica y social lo convierte en parte esencial de la identidad nacional.",
        "URL": "https://wallpapers.com/images/featured/pan-rtzqhi1ok4k1bxlo.jpg"
    },
    {
        "title": "Historia y gremios",
        "content": "En la Edad Media, los panaderos se organizaban en gremios y la producción era regulada por concejos municipales, mostrando el control y valor social del pan en la economía.",
        "URL": "https://media.istockphoto.com/id/475263838/es/foto/muchos-mezcl%C3%B3-panes-y-bollos-toma-realizada-desde-arriba.jpg?s=612x612&w=0&k=20&c=KmBEZnxZhaajwHukLR9SblDBQlMvXWKCsPE3WsC0z4Y="
    },
    {
        "title": "Modernización del pan",
        "content": "Durante el siglo XIX, la producción de pan se modernizó con nuevos molinos y hornos, permitiendo mayor producción y distribución, lo que transformó la industria panadera.",
        "URL": "https://i.pinimg.com/736x/68/66/21/686621f0d12ae4a0ca1ff0abec85ac89.jpg"
    },
    {
        "title": "Variedad regional",
        "content": "Por ejemplo en cada región de España tiene su especialidad de pan, como el 'pa de pagès' en Cataluña y el pan de centeno en Galicia, reflejando la diversidad cultural y gastronómica del país.",
        "URL": "https://png.pngtree.com/background/20250816/original/pngtree-milky-breads-hd-8k-wallpaper-stock-photographic-image-artisan-bread-display-picture-image_15818302.jpg"
    },
    {
        "title": "Significado simbólico",
        "content": "El pan simboliza generosidad y hospitalidad en la sociedad, siendo un alimento que une a la comunidad y representa valores compartidos.",
        "URL": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ed2541d-106f-444e-ac42-51e460b58ac1/dkkafmb-19ae3640-1df2-4544-851b-42316a0c84c9.jpg/v1/fill/w_894,h_894,q_70,strp/banana_bread__kiwis_and_corn_by_tokomokoshoko_dkkafmb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiIvZi8zZWQyNTQxZC0xMDZmLTQ0NGUtYWM0Mi01MWU0NjBiNThhYzEvZGtrYWZtYi0xOWFlMzY0MC0xZGYyLTQ1NDQtODUxYi00MjMxNmEwYzg0YzkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KIEa5dR6BQYBZOQKgN2WKtum4T6Qlo7Y6mdLHF7m_hU"
    },
    {
        "title": "Cambios en la industria",
        "content": "La globalización y competencia internacional han transformado la industria del pan, con el cierre de panaderías tradicionales y el auge de grandes cadenas y supermercados.",
        "URL": "https://i.pinimg.com/736x/42/03/b4/4203b45cfcedf100812fc9c1553df414.jpg"
    },
    {
        "title": "Calidad y tradición",
        "content": "El aumento de costos y competencia ha afectado la calidad del pan en algunas áreas, pero sigue siendo fundamental en la cultura y tradición mundial.",
        "URL": "https://i.pinimg.com/736x/cc/1e/72/cc1e72b1045ee2aca015f6f4dfa53b88.jpg"
    },
    {
        "title": "El pan en la dieta diaria",
        "content": "El pan se consume diariamente en la mayoría de los hogares del mundo, manteniéndose como parte esencial de la alimentación y costumbres familiares.",
        "URL": "https://i.pinimg.com/1200x/b8/d6/f1/b8d6f19c86aabf4a90c024832b0c0efe.jpg"
    },
    {
        "title": "Origen antiguo",
        "content": "El pan tiene un origen milenario, con evidencias de su consumo desde hace más de 4000 años, elaborado inicialmente con tubérculos y cereales silvestres.",
        "URL": "https://i.pinimg.com/1200x/d3/00/aa/d300aa6c8e0ec344f4f69afc6da9446b.jpg"
    },
    {
        "title": "Evidencias arqueológicas",
        "content": "Fragmentos de pan ácimo han sido encontrados en yacimientos suizos, mostrando la antigüedad y evolución de este alimento en distintas culturas.",
        "URL": "https://i.pinimg.com/736x/2e/db/85/2edb8533d36519ba5c32268612728453.jpg"
    },
    {
        "title": "Pan en Egipto y Roma",
        "content": "Los egipcios usaban levadura y hornos, y en Roma existían hornos públicos. El pan era tan importante que se usaba como moneda para pagar jornales.",
        "URL": "https://i.pinimg.com/736x/ef/fd/45/effd45555d1f368f62c54ba39f607a0c.jpg"
    },
    {
        "title": "Diversidad de cereales",
        "content": "El trigo es el cereal más usado para pan, pero también se emplean centeno, cebada, maíz y arroz, según la región y tradición local.",
        "URL": "https://i.pinimg.com/736x/14/f0/29/14f02952cf8b525797191622a36faad9.jpg"
    },
    {
        "title": "Panes africanos y americanos",
        "content": "En África se usan harinas de sorgo y mijo, y en América el casabe se elabora con yuca, mostrando la adaptación del pan a diferentes culturas.",
        "URL": "https://i.pinimg.com/1200x/45/6a/3c/456a3c8a84d506aeb0181c3d531458bb.jpg"
    },
    {
        "title": "Levadura y esponjosidad",
        "content": "La levadura es clave para la esponjosidad del pan occidental, mientras que el pan ácimo, sin levadura, es plano y típico de culturas árabe y judía.",
        "URL": "https://i.pinimg.com/736x/54/1a/fc/541afcfc6215785cf515aeaecac86c07.jpg"
    },
    {
        "title": "Virtudes y versatilidad",
        "content": "El pan es versátil: a los ingredientes básicos se pueden añadir huevos, azúcar, especias, frutas, verduras y semillas, creando una gran variedad de sabores y formas.",
        "URL": "https://i.pinimg.com/736x/e1/d0/74/e1d0741d83240b78cb075514b0047ce5.jpg"
    },
    {
        "title": "Formas y nombres",
        "content": "La forma y el amasado determinan el nombre y sabor del pan: hogazas, barras, baguets, trenzas, bollos, entre otros, enriquecen la oferta panadera.",
        "URL": "https://i.pinimg.com/1200x/b4/d6/61/b4d661ee119373cb6963708a45535212.jpg"
    },
    {
        "title": "Lenguaje y alimentación",
        "content": "En algunas culturas, la palabra para alimento es la misma que para pan, reflejando su importancia en la dieta mundial.",
        "URL": "https://i.pinimg.com/1200x/90/aa/c5/90aac5189a4707e2f6dc4e7c702c3a74.jpg"
    },
    {
        "title": "Tradiciones y ritos",
        "content": "El pan está presente en tradiciones religiosas y sociales, como la eucaristía cristiana, la pascua judía y las bodas ortodoxas, entre otras celebraciones.",
        "URL": "https://i.pinimg.com/736x/b8/20/95/b82095425c264d1bbf583bec864753b1.jpg"
    },
    {
        "title": "Museos y curiosidades",
        "content": "Existen museos dedicados al pan en Europa, y su consumo ha crecido con la población mundial, aunque ha disminuido en países industriales.",
        "URL": "https://i.pinimg.com/736x/9a/69/c3/9a69c3409690f1a9a10578a48d84ac6c.jpg"
    },
    {
        "title": "Remedios y usos caseros",
        "content": "El pan se usa en remedios caseros, como quita-olores, para eliminar humedad o grasa, y hasta para retirar trozos de vidrio, mostrando su utilidad más allá de la alimentación.",
        "URL": "https://i.pinimg.com/736x/6c/18/20/6c18202ddd906b84d142d512852e6b0d.jpg"
    }
]




export default {
    Slide_1,
    Slide_2,
    SLIDES_INFO
}