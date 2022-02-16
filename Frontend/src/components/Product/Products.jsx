import React from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import AddIcon from '@mui/icons-material/Add'
import { ProductCard } from './ProductCard'
import styles from './Product.module.css'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../Loader/Loader'
import { Header } from '../Home/Header'

import { Footer } from '../Home/Footer'

import Slider from '@material-ui/core/Slider'

import {
  getproductsLoading,
  getproductsSuccess,
  productsDetailsFail,
} from '../../Features/Product/action'

const categories = [
  'Joggers',
  'Jeans',
  'Jacket',
  'Leggings',
  'Sweaters',
  'Tank',
  'T-Shirt',
]
const genders = ['Boys', 'Girls', 'Men', 'Unisex', 'Women']
const brands = ['ADIDAS', 'ALO', 'CANADA-GOOSE', 'NIKE', 'VUORI', 'ZELLA']

export const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [price, setPrice] = useState([0, 100000])
  const [category, setCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [gender, setGender] = useState('')
  const [brand, setBrand] = useState('')
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const {
    loading,
    filteredProductsCount,
    resultPerPage,
    productsCount,
  } = useSelector((state) => state.productsState)
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
  }
  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }

  const getData = () => {
    dispatch(getproductsLoading())

    let link = `http://localhost:4500/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`
    console.log('1', link)
    if (category) {
      link = `http://localhost:4500/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`
      console.log('2', link)
    }

    if (brand) {
      link = `http://localhost:4500/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&brand=${brand}`
      console.log('3', link)
    }

    if (gender) {
      link = `http://localhost:4500/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&gender=${gender}`
      console.log('4', link)
    }

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getproductsSuccess(data))
        setProducts(data.products)
      })
      .catch((err) => {
        dispatch(productsDetailsFail(err))
      })
  }

  let count = filteredProductsCount

  useEffect(() => {
    getData()
  }, [dispatch, currentPage, price, category, gender, brand])

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.bigcontainer}>
          <div className={styles.leftw}>
            <div className={styles.leftfunctionality}>
             
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Category
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <div className={styles.categoryBox}>
                    {categories.map((category) => (
                      <h5
                        className={styles.categorylink}
                        key={category}
                        onClick={() => setCategory(category)}
                      >
                        {category}
                      </h5>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ width: '100%' }}>
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Gender
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.categoryBox}>
                    {genders.map((gender) => (
                      <h5
                        className={styles.categorylink}
                        key={gender}
                        onClick={() => setGender(gender)}
                      >
                        {gender}
                      </h5>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ width: '100%' }}>
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Color
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Brand
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.categoryBox}>
                    {brands.map((brand) => (
                      <h5
                        className={styles.categorylink}
                        key={brand}
                        onClick={() => setBrand(brand)}
                      >
                        {brand}
                      </h5>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>

         
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Length
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Material
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Neck Style
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Occasion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Price
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Slider
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    step={10}
                    min={100}
                    max={100000}
                  />
                </AccordionDetails>
              </Accordion>

              
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Sale
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              

              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Sleeve Length
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              
              <Accordion
                sx={{
                  width: '100%',
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ width: '20px' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      lineHeight: '1.4',
                      fontSize: '0.8rem',
                    }}
                  >
                    Style
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

          </div>

          <div className={styles.righty}>
            <div className={styles.banner}>
              <img
                src="https://n.nordstrommedia.com/id/97c493f1-9ca8-40be-aabb-abf6bed3fc0a.jpeg?h=417&w=1334"
                alt="image"
                className={styles.bannerimage}
              />
            </div>
            <div className={styles.rightw}>
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>

        </div>
      )}

      <Footer />
    </div>
  )
}
