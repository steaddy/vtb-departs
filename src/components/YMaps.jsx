import React from 'react';
import {YMaps, Map, Placemark, ZoomControl, Polyline} from 'react-yandex-maps';

const MapContainer = () => {
    const points = [
        {
            coordinates: [55.749, 37.580],
            content: 'Метка 1',
        },
        {
            coordinates: [55.754, 37.622],
            content: 'Метка 2',
        },
        {
            coordinates: [55.757, 37.579],
            content: 'Метка 3',
        },
    ];

    const route = [
        [55.7541, 37.6224],
        [55.7414, 37.6144],
        [55.7304, 37.5944],
        [55.7271, 37.5854],
        [55.7144, 37.5674],
    ];

    return (<YMaps query={{ load: 'package.full' }}>
            <div style={{height: '800px', width: '1000px', border: '2px solid burlywood'}}>
                <Map width='100%' height='100%' defaultState={{
                    center: [55.75, 37.57],
                    zoom: 10,
                    controls: ['zoomControl']
                }}>
                    <Polyline geometry={route} options={{strokeColor: '#a37', strokeWidth: 4}}/>
                    <ZoomControl options={{size: 'small', position: {bottom: 100, right: 10}}}/>
                    <Placemark

                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        geometry={[55.75, 37.57]}
                        properties={{
                            iconCaption: 'Описание висит здесь',
                            iconContent: 7,
                            balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
                                '<span class="description">Сеть кинотеатров</span>',

                            balloonContentBody: '<img src="https://sandbox.api.maps.yandex.net/examples/ru/2.1/balloon_html/img/cinema.jpg" height="150" width="200"> <br/> ' +
                                '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                                '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',

                            balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
                            hintContent: "Хинт, появляющийся при наведении"
                        }}
                    />






                </Map>
            </div>
        </YMaps>
    )
};

export default MapContainer;