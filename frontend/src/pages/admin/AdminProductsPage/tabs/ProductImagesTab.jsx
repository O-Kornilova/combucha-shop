import { useRef } from 'react'
import API_BASE_URL from '../../../../utils/config'
import Button from '../../../../components/Button/Button'
import styles from '../AdminProductsPage.module.css'
import axios from 'axios'
import DeleteIcon from '../../../../assets/icons/delete-icon.png'

export default function ProductImagesTab ({
  form,
  setForm,
  uploading,
  setUploading
}) {
  const fileRef = useRef(null)

  const uploadMultipleHandler = async e => {
    const files = e.target.files
    if (!files) return

    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i])
    }

    setUploading(true)
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/upload/multiple`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )

      // Если data это массив строк, конвертируем в объекты { url, isMain }
      const newImages = data.map(file =>
        typeof file === 'string' ? { url: file, isMain: false } : file
      )

      setForm({
        ...form,
        images: [...(form.images || []), ...newImages]
      })
      setUploading(false)
    } catch (error) {
      console.error(error)
      alert('❌ Ошибка при загрузке фото')
      setUploading(false)
    }
  }

  const handleSetMain = index => {
    const updated = form.images.map((img, i) => ({
      ...img,
      isMain: i === index
    }))
    setForm({ ...form, images: updated })
  }

  const handleRemove = index => {
    const updated = form.images.filter((_, i) => i !== index)
    setForm({ ...form, images: updated })
  }

  return (
    <div>
      <input
        type='file'
        accept='image/*'
        multiple
        ref={fileRef}
        style={{ display: 'none' }}
        onChange={uploadMultipleHandler}
      />
      <Button type='button' onClick={() => fileRef.current.click()}>
        Додати фото
      </Button>

      {uploading && <p>Загрузка...</p>}

      {form.images && form.images.length > 0 && (
        <div className={styles.imagesGrid}>
          {form.images.map((img, idx) => (
            <div className={styles.imageCard} key={img.url + idx}>
              <img src={img.url} alt={`Фото ${idx}`} />

              <div className={styles.imageActions}>
                <button
                  type='button'
                  className={styles.mainButton}
                  onClick={() => handleSetMain(idx)}
                >
                  {img.isMain ? 'Головне' : 'Зробити головним'}
                </button>

                <button
                  type='button'
                  onClick={() => handleRemove(idx)}
                  className={styles.iconBtn}
                >
                  <img src={DeleteIcon} alt='Видалити' />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
