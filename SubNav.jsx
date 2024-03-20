import React from 'react'
import { Link } from 'react-router-dom'
import { subNavItems } from '../../static/subdata'
import styles from '../../styles/styles'


const SubNav = ({active}) => {
  return (
    <div className={`block ${styles.noramlFlex} ${styles['800px']}`}>
    {
        subNavItems && subNavItems.map((i, index) => (
            <div className="flex" key={index}>
                <Link
                    to={i.url}
                    className={`${active === index + 1 ? " text-[#17dd1f]" : "text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer`}
                >
                    {i.title}
                </Link>
            </div>
        ))
    }
</div>

  )
}
export default SubNav;