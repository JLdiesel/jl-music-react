import JLFriend from '@/views/friend'
import JLMine from '@/views/mine'
import JLLogin from '@/views/login'
import JLMusicer from '@/views/musicer'
import JLShop from '@/views/shop'
import JLDownload from '@/views/download'
import JLDiscover from "@/views/discover";
import Recommend from "@/views/discover/pages/recommend";
import Ranking from "@/views/discover/pages/ranking";
import Songs from "@/views/discover/pages/songs";
import Djradio from "@/views/discover/pages/djradio";
import Artist from "@/views/discover/pages/artist";
import Album from "@/views/discover/pages/album";
// import JLPlayer from "../views/player";
import React from 'react'
import {
    Redirect
} from 'react-router'
const router = [{
        path: '/',
        exact: true,
        render: () => ( <
            Redirect to = '/discover' / >
        )
    },
    {
        path: '/discover',
        component: JLDiscover,
        routes: [{
                path: '/discover',
                exact: true,
                render: () => ( <
                    Redirect to = {
                        "/discover/recommend"
                    }
                    / >
                )
            }, {
                path: "/discover/recommend",
                component: Recommend
            }, {
                path: "/discover/ranking",
                component: Ranking
            }, {
                path: "/discover/songs",
                component: Songs
            }, {
                path: "/discover/djradio",
                component: Djradio
            }, {
                path: "/discover/artist",
                component: Artist
            }, {
                path: "/discover/album",
                component: Album
            },
            /*  {
                        path: "/discover/player",
                        component: JLPlayer
                    } */
        ]
    },
    {
        path: '/mine',

        component: JLMine
    }, {
        path: '/friend',
        component: JLFriend
    }, {
        path: '/shop',
        component: JLShop
    }, {
        path: '/musicer',
        component: JLMusicer
    }, {
        path: '/download',
        component: JLDownload
    }, {
        path: '/login',
        component: JLLogin
    },
];
export default router