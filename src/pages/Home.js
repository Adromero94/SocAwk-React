import AuctionSection from 'components/HomeComponents/AuctionSection'
import BannerSection from 'components/HomeComponents/BannerSection'
import BlogSection from 'components/HomeComponents/BlogSection'
import CategorySection from 'components/HomeComponents/CategorySection'
import TopSellerSection from 'components/HomeComponents/TopSellerSection'
import React from 'react'

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      {/* <WalletSection/> */}
      <CategorySection />
      <AuctionSection />
      <TopSellerSection />
      {/* <ExclusiveDropsSection/> */}
      <BlogSection />
    </>
  )
}

export default HomeScreen
