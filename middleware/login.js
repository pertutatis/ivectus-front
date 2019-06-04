import UserRegistration from '~/services/user-registration'

export default function({ store, route, redirect }) {
  const RegisteredUser = UserRegistration.getUser()

  if (RegisteredUser) {
    store.commit('user/saveUser', RegisteredUser)
  }

  if (RegisteredUser && route.name === 'index') {
    redirect('/dashboard')
  }

  if (!RegisteredUser && route.name !== 'index') {
    redirect('/')
  }
}
