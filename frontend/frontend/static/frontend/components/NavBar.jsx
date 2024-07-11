import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "./ui/navigation-menu"
  import { Link } from 'react-router-dom';
  
const NavBar = () => {
  return (
    <div className='lg:w-1/3 w-11/12 rounded-lg pt-2 pb-2 flex m-auto mb-4 mt-7 bg-slate-800'>
        <NavigationMenu className='w-full m-auto'>
            <NavigationMenuList className='w-full flex justify-end'>
                <Link to='/patients'>
                    <NavigationMenuItem className={`${navigationMenuTriggerStyle()} cursor-pointer text-white bg-transparent`}>
                            Pacientes
                    </NavigationMenuItem>
                </Link>
                <Link to='/'>
                    <NavigationMenuItem className={`${navigationMenuTriggerStyle()} cursor-pointer text-white bg-transparent`}>
                            Adicionar
                    </NavigationMenuItem>
                </Link>
                <Link to='/login'>
                    <NavigationMenuItem className={`${navigationMenuTriggerStyle()} cursor-pointer text-white bg-transparent`}>
                            Log out
                    </NavigationMenuItem>
                </Link>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default NavBar