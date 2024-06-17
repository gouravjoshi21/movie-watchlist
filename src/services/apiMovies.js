import { browserId } from '../utils/browserId'
import supabase from './supabase'

export async function getMovies() {
    const { data, error } = await supabase
        .from('movies')
        .select('*')
        .eq('browser_id', browserId())
        .order('created_at', { ascending: false })

    if (error) {
        console.error(message)
        throw new Error('Cabins could not be loaded')
    }

    return data
}

export async function createMovie(movie) {
    const { data, error } = await supabase
        .from('movies')
        .insert([{ ...movie, browser_id: browserId() }])
        .select()

    if (error) {
        console.error(error)
        throw new Error(error.message)
    }

    return data
}

export async function updateMovie(movie) {
    const { data, error } = await supabase.from('movies').update(movie).eq('id', movie.id).select()

    if (error) {
        console.error(error)
        throw new Error(error.message)
    }

    return data
}

export async function deleteMovie(id) {
    const { error } = await supabase.from('movies').delete().eq('id', id)

    if (error) {
        console.error(error)
        throw new Error(error.message)
    }

    return id
}
