import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    return await Post.all()
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title', 'content', 'slug'])

    data.slug = data.title
    .toLowerCase() // Converte para letras minúsculas
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços em branco por hífens
    .replace(/-+/g, '-'); // Remove hífens duplicados

    const post = await Post.create(data)

    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    return post
  }

  public async update({ request, params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = request.only(['title', 'content', 'slug'])

    data.slug = data.title
    .toLowerCase() // Converte para letras minúsculas
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços em branco por hífens
    .replace(/-+/g, '-'); // Remove hífens duplicados

    post.merge(data)

    await post.save()

    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    await post.delete()
  }
}
