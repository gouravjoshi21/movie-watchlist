import styled from 'styled-components'
import StarRating from '../../ui/StarRating'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import { useForm } from 'react-hook-form'
import Button from '../../ui/Button'
import { useUpdateMovie } from './useUpdateMovie'
import { useParams } from 'react-router-dom'

const Parent = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
    border-radius: var(--border-radius-md);
    background-color: var(--color-bg-2);

    grid-column: 2 / 3;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > * {
        width: 100%;
    }

    textarea {
        width: 100% !important;
    }

    button {
        width: max-content;
    }
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

const RatingWrapper = styled.div`
    margin-bottom: 8px;

    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Error = styled.span`
    color: var(--color-red-2);
    font-size: 14px;
`

function ReviewForm({ movie }) {
    const { updateMovie, isUpdating } = useUpdateMovie()
    let { id } = useParams()
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            rating: movie.rating
        }
    })

    function handleRating(rating) {
        setValue('rating', rating)
    }
    function onSubmit(data) {
        updateMovie({ ...data, id })
    }

    return (
        <Parent>
            <RatingWrapper>
                <p>
                    Rating {errors?.rating?.message && <Error>( {errors?.rating?.message} )</Error>}
                </p>
                <StarRating
                    maxRating={5}
                    size={22}
                    onSetRating={handleRating}
                    defaultRating={getValues()?.rating ?? null}
                />
            </RatingWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Wrapper>
                    <Input
                        type="input"
                        as="textarea"
                        placeholder="Type here..."
                        {...register('rating', {
                            required: 'Rating is required!'
                        })}
                        hidden
                    />
                    <FormRow label="Description" error={errors?.review?.message}>
                        <Input
                            type="input"
                            as="textarea"
                            placeholder="Type here..."
                            {...register('review')}
                        />
                    </FormRow>
                </Wrapper>
                <Button size="small" var="primary" disabled={isUpdating}>
                    {isUpdating ? 'Saving...' : 'Review'}
                </Button>
            </Form>
        </Parent>
    )
}

export default ReviewForm
