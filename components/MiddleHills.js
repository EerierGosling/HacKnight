import hill_1 from "../public/hero/hills/middle/1.png";
import hill_2 from "../public/hero/hills/middle/2.png";
import hill_3 from "../public/hero/hills/middle/3.png";
import hill_4 from "../public/hero/hills/middle/4.png";
import React from "react";
import Image from 'next/image';

export default function MiddleHills({
    hill_height,
    index,
    viewHeight,
    viewWidth,
    scrollY,
    transform_left,
    transform_right,
    transform_down,
}) {
    const width = (3000 * hill_height) / 1024;

    const top = `${viewHeight - hill_height}px`;
    const left_num = viewWidth - width * (index * 0.8 + 1.4);
    const left = `${left_num}px`;

    const transform =
        left_num + width / 2 < viewWidth / 2 ? transform_left : transform_right;

    const full_transform = `${transform} ${transform_down}`;

    return (
        <div style={{ height: hill_height, width: width }}>
            <Image
                src={hill_1}
                alt="hills"
                style={{
                    height: hill_height,
                    width: width,
                    zIndex: "-1",
                    top: top,
                    left: left,
                    bottom: 0,
                    transform: full_transform,
                    position:"fixed"
                }}
            />
            <Image
                src={hill_2}
                alt="hills"
                style={{
                    height: hill_height,
                    width: width,
                    zIndex: "-2",
                    top: top,
                    left: left,
                    bottom: 0,
                    transform: full_transform,
                    position:"fixed"
                }}
            />
            <Image
                src={hill_3}
                alt="hills"
                style={{
                    height: hill_height,
                    width: width,
                    zIndex: "-3",
                    top: top,
                    left: left,
                    bottom: 0,
                    transform: full_transform,
                    position:"fixed"
                }}
            />
            <Image
                src={hill_4}
                alt="hills"
                style={{
                    height: hill_height,
                    width: width,
                    zIndex: "-4",
                    top: top,
                    left: left,
                    bottom: 0,
                    transform: full_transform,
                    position:"fixed"
                }}
            />
        </div>
    );
}
