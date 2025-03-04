import { AfterHeader } from './widget/after_header'
import { CardItems } from './widget/card_items'
import { Faq } from './widget/faq';

export const Home = () => {
    return (
        <div className='flex font-inter   overflow-x-hidden flex-col'>
            <AfterHeader />
            <div className='max-w-dvw'>
                <CardItems />
                <Faq />
            </div>

        </div>
    )
}
