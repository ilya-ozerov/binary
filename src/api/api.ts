import {v1} from "uuid";
import {Works} from "../types/types";

export const worksAPI = {
    getWorks: (startIndex: number, pageSize: number): Works => {

        const web = works.web.slice(startIndex, startIndex + pageSize);
        const apps = works.apps.slice(startIndex, startIndex + pageSize);
        const other = works.other.slice(startIndex, startIndex + pageSize);

        const worksPart: Works = {
            web: web,
            apps: apps,
            other: other,
        }

        if (web.length === 0) {
            console.log('No more photographies');
        }
        if (apps.length === 0) {
            console.log('No more design');
        }
        if (other.length === 0) {
            console.log('No more print');
        }
        return worksPart;
    },
}

const works: Works = {
    web: [
        {id: v1(), name: 'photo 1', imageUrl: 'https://picsum.photos/id/21/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 2', imageUrl: 'https://picsum.photos/id/22/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 3', imageUrl: 'https://picsum.photos/id/23/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 4', imageUrl: 'https://picsum.photos/id/24/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 5', imageUrl: 'https://picsum.photos/id/25/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 6', imageUrl: 'https://picsum.photos/id/26/1200/900', imageAlt: 'our work'},
        {id: v1(), name: 'photo 7', imageUrl: 'https://picsum.photos/id/27/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 8', imageUrl: 'https://picsum.photos/id/28/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 9', imageUrl: 'https://picsum.photos/id/29/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 10', imageUrl: 'https://picsum.photos/id/10/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 11', imageUrl: 'https://picsum.photos/id/11/1400/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 12', imageUrl: 'https://picsum.photos/id/12/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 13', imageUrl: 'https://picsum.photos/id/13/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 14', imageUrl: 'https://picsum.photos/id/14/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 15', imageUrl: 'https://picsum.photos/id/15/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 16', imageUrl: 'https://picsum.photos/id/16/1100/600', imageAlt: 'our work'},
        {id: v1(), name: 'photo 17', imageUrl: 'https://picsum.photos/id/17/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'photo 18', imageUrl: 'https://picsum.photos/id/18/1200/800', imageAlt: 'our work'},
    ],
    apps: [
        {id: v1(), name: 'app 1', imageUrl: 'https://picsum.photos/id/20/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 2', imageUrl: 'https://picsum.photos/id/30/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 3', imageUrl: 'https://picsum.photos/id/32/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 4', imageUrl: 'https://picsum.photos/id/33/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 5', imageUrl: 'https://picsum.photos/id/34/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 6', imageUrl: 'https://picsum.photos/id/35/1200/900', imageAlt: 'our work'},
        {id: v1(), name: 'app 7', imageUrl: 'https://picsum.photos/id/36/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 8', imageUrl: 'https://picsum.photos/id/37/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 9', imageUrl: 'https://picsum.photos/id/38/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 10', imageUrl: 'https://picsum.photos/id/39/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 11', imageUrl: 'https://picsum.photos/id/40/1400/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 12', imageUrl: 'https://picsum.photos/id/41/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 13', imageUrl: 'https://picsum.photos/id/42/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 14', imageUrl: 'https://picsum.photos/id/43/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 15', imageUrl: 'https://picsum.photos/id/44/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 16', imageUrl: 'https://picsum.photos/id/45/1100/600', imageAlt: 'our work'},
        {id: v1(), name: 'app 17', imageUrl: 'https://picsum.photos/id/46/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 18', imageUrl: 'https://picsum.photos/id/47/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 19', imageUrl: 'https://picsum.photos/id/48/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 20', imageUrl: 'https://picsum.photos/id/49/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 21', imageUrl: 'https://picsum.photos/id/50/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 22', imageUrl: 'https://picsum.photos/id/51/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 23', imageUrl: 'https://picsum.photos/id/52/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 24', imageUrl: 'https://picsum.photos/id/53/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 25', imageUrl: 'https://picsum.photos/id/54/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'app 26', imageUrl: 'https://picsum.photos/id/55/1200/800', imageAlt: 'our work'},
    ],
    other: [
        {id: v1(), name: 'image 1', imageUrl: 'https://picsum.photos/id/91/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 2', imageUrl: 'https://picsum.photos/id/92/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 3', imageUrl: 'https://picsum.photos/id/93/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 4', imageUrl: 'https://picsum.photos/id/94/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 5', imageUrl: 'https://picsum.photos/id/95/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 6', imageUrl: 'https://picsum.photos/id/96/1200/900', imageAlt: 'our work'},
        {id: v1(), name: 'image 7', imageUrl: 'https://picsum.photos/id/97/1000/900', imageAlt: 'our work'},
        {id: v1(), name: 'image 8', imageUrl: 'https://picsum.photos/id/98/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 9', imageUrl: 'https://picsum.photos/id/99/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 10', imageUrl: 'https://picsum.photos/id/100/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 11', imageUrl: 'https://picsum.photos/id/101/1400/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 12', imageUrl: 'https://picsum.photos/id/102/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 13', imageUrl: 'https://picsum.photos/id/103/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 14', imageUrl: 'https://picsum.photos/id/104/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 15', imageUrl: 'https://picsum.photos/id/105/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 16', imageUrl: 'https://picsum.photos/id/106/1100/600', imageAlt: 'our work'},
        {id: v1(), name: 'image 17', imageUrl: 'https://picsum.photos/id/107/1200/800', imageAlt: 'our work'},
        {id: v1(), name: 'image 18', imageUrl: 'https://picsum.photos/id/108/1200/800', imageAlt: 'our work'},
    ],
}