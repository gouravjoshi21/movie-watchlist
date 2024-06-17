import { browserId } from '../utils/browserId'
import supabase from './supabase'

export async function getMovies() {
    const { data, error } = await supabase.from('movies').select('*').eq('browser_id', browserId())

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
