import React from 'react'
import ArticleCard from '../components/ArticleCard.jsx'
import logo from '../img/staff/eric.jpg'

const MainPage = () => {
	return (
    <div className="flex flex-row flex-wrap w-full">
      <ArticleCard title="New article" desc="article text askdbasdbas jasdjas djasdas asdas as sd sdasd asd asjkd askd sak jdasjk ajdak j..." image={logo} link="placeholder"/>
   		<p className="w-1/2">Calender</p>
      <ArticleCard title="New Video!" desc="ndasjk nkasjnd askj nkdaj ns sankdnsadk nasls nals nsal naslknd ..." image={logo} link="placeholder"/>
    </div>
	)
}

export default MainPage;
