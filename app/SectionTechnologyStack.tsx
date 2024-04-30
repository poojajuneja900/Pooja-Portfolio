"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from "./home.module.css";


const technologyStack = [
    {
        name: 'C++',
        image: assets.home.technologyStack.cplus,
        officialSite: 'https://cplusplus.com/',
    },
    {
        name: 'Java',
        image: assets.home.technologyStack.Java,
        officialSite: 'https://cplusplus.com/',
    },
    {
        name: 'Python',
        image: assets.home.technologyStack.Python,
        officialSite: 'https://www.python.org/',
    },
    {
        name: "DSA",
        image: assets.home.technologyStack.Dsa,
        officialSite: 'Filmora',
    },
    {
        name: "HTML",
        image: assets.home.technologyStack.HTML,
        officialSite: 'https://html.com/',
    },
    {
        name: "CSS",
        image: assets.home.technologyStack.css,
        officialSite: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        name: 'JavaScript',
        image: assets.home.technologyStack.Javascript,
        officialSite: 'https://www.unrealengine.com/en-US?sessionInvalidated=true',
    },
    {
        name: "React",
        image: assets.home.technologyStack.React,
        officialSite: 'https://www.figma.com/',
    },
    {
        name: "NodeJs",
        image: assets.home.technologyStack.NodeJs,
        officialSite: 'https://www.shapr3d.com/',
    },
    
    
  
]

export default function SectionTechnologyStack() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={`${styles.sectionTitle} pb-8`}>Technology Stack</motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription}  max-w-[960px] mx-auto`}>I am concerned about Design and performance for my client. That&apos;s why I always keep updating and use best technologies in a Product</motion.p>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <div className='flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center'>
                    {technologyStack.map((item, index) => (
                        <div key={index.toString()} className='relative h-full'>
                            <motion.div
                                className="flex justify-center items-center w-[100px] h-[100px] transition-all duration-150 ease-in-out"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    className='w-auto h-[100px]'
                                    src={item.image}
                                    width={0}
                                    height={100}
                                    alt={item.name}
                                />
                                <Link
                                    href={{
                                        pathname: item.officialSite,
                                        query: {
                                            utm_source: 'deri.my.id',
                                            utm_medium: 'campaign',
                                            utm_campaign: 'portfolio'
                                        }
                                    }}
                                    target="_blank"
                                    title={`Figure out about ${item.name}`}
                                >
                                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-1 text-white transition-all duration-300 bg-opacity-50 opacity-0 gradient-bg hover:opacity-100 rounded-xl">
                                        <p className='font-semibold text-center line-clamp-3'>
                                            {item.name}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    )
}
