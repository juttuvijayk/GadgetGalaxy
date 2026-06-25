'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='relative flex-1 flex flex-col bg-gradient-to-r from-indigo-950 via-purple-900 to-slate-900 rounded-3xl xl:min-h-100 group border border-indigo-500/20'>
                    <div className='p-5 sm:p-16'>
                        <div className='inline-flex items-center gap-3 bg-indigo-900/50 text-cyan-300 border border-indigo-500/30 pr-4 p-1 rounded-full text-xs sm:text-sm'>
                            <span className='bg-cyan-500 px-3 py-1 max-sm:ml-1 rounded-full text-slate-950 font-bold text-xs'>NEWS</span> Free Shipping on Orders Above ₹500! <ChevronRightIcon className='group-hover:ml-2 text-cyan-400 transition-all' size={16} />
                        </div>
                        <h2 className='text-3xl sm:text-5xl leading-[1.2] my-3 font-semibold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent max-w-xs  sm:max-w-md'>
                            Gadgets you'll love. Prices you'll trust.
                        </h2>
                        <div className='text-slate-300 text-sm font-medium mt-4 sm:mt-8'>
                            <p>Starts from</p>
                            <p className='text-3xl text-white font-bold'>{currency}499.00</p>
                        </div>
                        <button className='bg-cyan-500 text-slate-950 font-semibold text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-cyan-400 hover:scale-103 active:scale-95 transition-all'>LEARN MORE</button>
                    </div>
                    <Image className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm' src={assets.hero_model_img} alt="" />
                </div>
                <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-300'>
                    <div className='flex-1 flex items-center justify-between w-full bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/20 rounded-3xl p-6 px-8 group'>
                        <div>
                            <p className='text-3xl font-semibold bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent max-w-40'>Best products</p>
                            <p className='flex items-center gap-1 mt-4 text-cyan-400 font-medium cursor-pointer'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img1} alt="" />
                    </div>
                    <div className='flex-1 flex items-center justify-between w-full bg-gradient-to-br from-purple-950 to-slate-900 border border-purple-500/20 rounded-3xl p-6 px-8 group'>
                        <div>
                            <p className='text-3xl font-semibold bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent max-w-40'>20% discounts</p>
                            <p className='flex items-center gap-1 mt-4 text-purple-400 font-medium cursor-pointer'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35' src={assets.hero_product_img2} alt="" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero