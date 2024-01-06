'use client'

import { getEmojis } from "@/server/get-emojis"
import { EmojiCard } from "../emoji-card"
import toast from "react-hot-toast"
interface EmojiGridProps {
  prompt?: string
}

export async function EmojiGrid({ prompt }: EmojiGridProps) {
const toastErr = () => {
  toast.error("后台维护中，暂不支持使用，请静待开放测试，感谢支持。")
}
  return (
    <div className="ml-3 animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
      <h2 className="font-semibold text-md text-left w-full mb-3">Recent Actions</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
        <span
          className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">完成身份验证系统和一次性课程下载器开发<span
              className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on
            December 23th, 2023
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">基本完成用户校验业务和用户行为业务开发。完成 TUI 一次性课程下载器桌面端开发。</p>
          <a onClick={toastErr}
             className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
              <path
                d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
            </svg>

           Try TUI Downloader</a>
        </li>
        <li className="mb-10 ms-6">
        <span
          className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">完成数据库迁移并通过压力测试</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on
            November 7th, 2023
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">核心数据迁移至 Supabase 分布式数据库。完成 Anycast 和边缘中间件基本业务开发。</p>
        </li>
        <li className="ms-6">
        <span
          className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">完成技术选型和最小可行性产品测试</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on
            October 2nd, 2023
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">使用云原生架构重构项目，并完成MVP测试。使用 Go + Next.js 作为主要的后台，中间件和前端框架。完成云产品的技术选型和购买。</p>
        </li>
      </ol>
    </div>
  )
}
