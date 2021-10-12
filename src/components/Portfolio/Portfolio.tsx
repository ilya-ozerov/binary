import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './portfolio.scss';
import {selectApps, selectIsAllWorks, selectOther, selectWeb} from "../../redux/worksSelectors";
import {Item} from './Item/Item';
import {WorkItem} from "../../types/types";
import {getMoreWorks, getWorks} from "../../redux/portfolioReducer";
import {Image} from "antd";

type PortfolioProps = {
    portfolioRef: React.RefObject<HTMLDivElement>;
}

enum Selector {
    All,
    Apps,
    Web,
    Other,
}

export const Portfolio: React.FC<PortfolioProps> = ({portfolioRef}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorks());
    }, [])

    const [selector, setSelector] = useState<Selector>(Selector.All);

    const apps = useSelector(selectApps);
    const web = useSelector(selectWeb);
    const other = useSelector(selectOther);
    const isAll = useSelector(selectIsAllWorks);

    const [allWorks, setAllWorks] = useState<WorkItem[]>([...apps, ...web, ...other])

    useEffect(() => {
        setAllWorks([...apps, ...web, ...other])
    }, [apps, web, other])

    const appsList = apps.map(app => {
        return <Item key={app.id} imageUrl={app.imageUrl} imageAlt={app.imageAlt}/>
    })

    const webList = web.map(web => {
        return <Item key={web.id} imageUrl={web.imageUrl} imageAlt={web.imageAlt}/>
    })

    const otherList = other.map(other => {
        return <Item key={other.id} imageUrl={other.imageUrl} imageAlt={other.imageAlt}/>
    })

    const allList = allWorks.map(item => {
        return <Item key={item.id} imageUrl={item.imageUrl} imageAlt={item.imageAlt}/>
    })

    return (
        <section ref={portfolioRef} className="portfolio">
            <div className="portfolio__title title">
                <h2>Portfolio</h2>
            </div>

            <ul className="portfolio__selector">
                <li className={selector === Selector.All ? "portfolio__active" : ""}
                    onClick={() => setSelector(Selector.All)}>all
                </li>
                <li className={selector === Selector.Web ? "portfolio__active" : ""}
                    onClick={() => setSelector(Selector.Web)}>web
                </li>
                <li className={selector === Selector.Apps ? "portfolio__active" : ""}
                    onClick={() => setSelector(Selector.Apps)}>apps
                </li>
                <li className={selector === Selector.Other ? "portfolio__active" : ""}
                    onClick={() => setSelector(Selector.Other)}>other
                </li>
            </ul>

            <div className="portfolio__gallery">
                <Image.PreviewGroup>
                    {selector === Selector.All && allList}
                    {selector === Selector.Apps && appsList}
                    {selector === Selector.Other && otherList}
                    {selector === Selector.Web && webList}
                </Image.PreviewGroup>
            </div>

            {
                (selector === Selector.Web && !isAll.web) &&
                <div className="portfolio__button button">
                    <button onClick={() => dispatch(getMoreWorks())}>
                        Read more
                    </button>
                </div>
            }
            {
                (selector === Selector.Other && !isAll.other) &&
                <div className="portfolio__button button">
                    <button onClick={() => dispatch(getMoreWorks())}>
                        Read more
                    </button>
                </div>
            }
            {
                (selector === Selector.Apps && !isAll.apps) &&
                <div className="portfolio__button button">
                    <button onClick={() => dispatch(getMoreWorks())}>
                        Read more
                    </button>
                </div>
            }
        </section>
    );
}
