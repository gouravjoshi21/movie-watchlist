import styled from 'styled-components'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useCreateMovie } from './useCreateMovie'
import { useUpdateMovie } from './useUpdateMovie'

const Form = styled.form`
    max-width: 500px;

    display: flex;
    flex-direction: column;
    gap: 24px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
        font-weight: 500;
        text-align: right;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 8px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`

function MovieForm({ movie = null }) {
    const { createMovie, isCreating } = useCreateMovie()
    const { updateMovie, isUpdating } = useUpdateMovie()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: movie ?? {}
    })
    const isNew = movie ? false : true

    function onSubmit(data) {
        if (isNew) createMovie(data)
        else updateMovie(data)
    }

    const isImageUrl = (url) => {
        return url.match(/\.(jpeg|jpg|gif|png)$/) != null
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
                <FormRow label="Title" error={errors?.title?.message}>
                    <Input
                        type="text"
                        placeholder="Movie name"
                        {...register('title', {
                            required: 'Title is required!'
                        })}
                    />
                </FormRow>
                <FormRow label="Description" error={errors?.description?.message}>
                    <Input
                        type="input"
                        as="textarea"
                        placeholder="description"
                        {...register('description')}
                    />
                </FormRow>
                <FormRow label="Release year" error={errors?.year?.message}>
                    <Input
                        type="number"
                        placeholder="2020"
                        {...register('year', {
                            required: 'Release year is required!',
                            validate: (value) => {
                                const year = parseInt(value, 10)
                                if (isNaN(year)) {
                                    return 'Release year must be a number'
                                }
                                if (year < 1888 || year > new Date().getFullYear()) {
                                    return 'Should be 1888 and the current year'
                                }
                                return true
                            }
                        })}
                    />
                </FormRow>
                <FormRow label="Genre" error={errors?.genre?.message}>
                    <Input type="text" placeholder="Action, Comedy" {...register('genre')} />
                </FormRow>
                <FormRow label="Cover url ( Optional )" error={errors?.cover?.message}>
                    <Input
                        type="url"
                        {...register('cover', {
                            validate: (value) => {
                                if (value && !isImageUrl(value)) {
                                    return 'Cover URL must be an image URL ending in .jpg, .jpeg, .gif, or .png'
                                }
                                return true
                            }
                        })}
                    />
                </FormRow>
            </Wrapper>
            <ButtonWrapper>
                <Button
                    size="medium"
                    var="tertiary"
                    as={Link}
                    to="/"
                    disabled={isCreating || isUpdating}
                >
                    Cancel
                </Button>
                {isNew ? (
                    <Button size="medium" var="primary" disabled={isCreating}>
                        {isCreating ? 'Adding...' : 'Add'}
                    </Button>
                ) : (
                    <Button size="medium" var="primary" disabled={isUpdating}>
                        {isUpdating ? 'Updating...' : 'Update'}
                    </Button>
                )}
            </ButtonWrapper>
        </Form>
    )
}

export default MovieForm
