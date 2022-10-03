# Social network written in React and using the [free version of SamuraiJs api](https://social-network.samuraijs.com/docs)

## Information:

* If the deployed site does not open, use vpn
* I used the free version of the api so here is what you can do by going to the site:
  * Login or Register, every ten login attempts you will see a captcha that needs to be solved. You can select the option: remember me and then for some time you will not need to go through authorization. Also, you can always log out.
  * On the left side of the header there is a help button by clicking on which you can always read detailed information about the site's capabilities.
  * IMPORTANT: the free version of the api does not allow you to work with posts or messages, so they are stored only in BLL.
  * On the profile page, you can change your name, profile picture (there is a validation of the extension and file size), description, your links (there is a validation too),  job search status and message to it. And you can also change the message that will be visible to everyone in the list of users. Posts are saved only in BLL =)
  * The message page simulates the ability to switch between chats and write to different people, but the work is limited to BLL. Again =)
  * On the Users page, their page-by-page output is implemented. You can click on a user's avatar to go to their profile.
* 429 http status means that the number of allowed post\put\delete requests per hour has been exceeded and you need to wait a bit, this is a limitation for free use of the api.

## Technologies that I used:

* ReactJS 18
* Redux
* React - Redux 
* Redux Thunk
* React Final Form
* React Router v6
* Axios + Fetch
* React Hooks
* Prettier
* Eslint
* CSS-Modules 
* React Content Loader (created by me component \<Preloader/>)
* React Pagination
* Lazy Loading (React.lazy() and Suspense)
* React Testing Library and Jest

## Sсreenshots:
<image src = "https://user-images.githubusercontent.com/89345760/193523514-85e21df3-9fb7-4a8f-8caf-47a9df49d2e3.png"  width = "33%" /><image src = "https://user-images.githubusercontent.com/89345760/193523599-19e14214-7e94-49bd-a03a-002c2209c8c6.png"  width = "33%"  /><image src = "https://user-images.githubusercontent.com/89345760/193526871-439bb50d-3b90-4b40-be33-3ce78b827812.png"  width = "33%" />

<image src = "https://user-images.githubusercontent.com/89345760/193532326-d704f352-beef-449a-a09a-172e66139966.png" width = "33%" /><image src = "https://user-images.githubusercontent.com/89345760/193531694-5cf67ae8-6034-48d2-a2f5-df78a36fc00e.png" width = "33%"   /><image src = "https://user-images.githubusercontent.com/89345760/193531431-d8ec1012-fd4a-4618-8e78-9be57274d433.png" width = "33%"   />


<image src = "https://user-images.githubusercontent.com/89345760/193532866-4b188bf0-97ac-4138-b479-42c397f3e2cd.png" width = "25%" /><image src = "https://user-images.githubusercontent.com/89345760/193532918-267d6eb4-c9fe-4a4c-879f-3ca2f8c1304a.png" width = "25%"   /><image src = "https://user-images.githubusercontent.com/89345760/193532970-b6f283c1-eaa3-4bdc-978b-d55bc84c257d.png" width = "25%"   /><image src = "https://user-images.githubusercontent.com/89345760/193533060-e13470a6-d742-44da-8cff-7411b962d0cb.png" width = "25%"   />


## Speed tests:
![image](https://user-images.githubusercontent.com/89345760/193514056-1723ff43-8370-4051-a09e-2ce262643672.png)
![image](https://user-images.githubusercontent.com/89345760/193514094-440f3b17-74f0-4d8b-874d-743db6ab8074.png)
