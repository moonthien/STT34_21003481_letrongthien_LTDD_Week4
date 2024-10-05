import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { images } from '../constants/images';
import { useState } from 'react';

export default function Tiki_Ok() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);

    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image source={images.Book} style={styles.bookImage} />
                    <Text style={styles.savedText}>Mã giảm giá đã lưu</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={styles.supplierText}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={styles.priceText}>141.800 đ</Text>
                    <Text style={styles.originalPriceText}>141.800 đ</Text>

                    <View style={styles.countContainer}>
                        <TouchableOpacity onPress={decreaseQuantity} style={styles.countButton} >
                            <Text style={styles.countButtonText}>-</Text>
                        </TouchableOpacity>
                        <TextInput
                            value={quantity.toString()}
                            style={styles.quantityInput}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity onPress={increaseQuantity} style={styles.countButton} >
                            <Text style={styles.countButtonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveButtonText}>Mua sau</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Xem tại đây</Text>

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.couponContainer}>
                <View style={styles.couponRow}>
                    <Image source={images.YellowBlock} style={styles.couponIcon} />
                    <TextInput
                        style={styles.couponInput}
                        placeholderTextColor="#999"
                        placeholder='Mã giảm giá'
                    />
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <View style={styles.moneyContainer}>
                    <Text style={styles.giftText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <TouchableOpacity>
                        <Text style={styles.giftLinkText}>Nhập tại đây?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <View style={styles.moneyContainer}>
                    <Text style={styles.subtotalText}>Tạm tính</Text>
                    <Text style={styles.subtotalPriceText}>141.800 đ</Text>
                </View>
            </View>

            <View style={styles.footerOrderContainer}>
                <View style={styles.moneyContainer}>
                    <Text style={styles.totalText}>Thành tiền</Text>
                    <Text style={styles.totalPriceText}>141.800 đ</Text>
                </View>

                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        padding: 10,
    },
    mainContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        padding: 10,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookImage: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
    savedText: {
        fontSize: 12,
        marginTop: 29,
        color: '#666',
    },
    detailsContainer: {
        flex: 2,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    supplierText: {
        fontSize: 12,
        color: '#666',
        marginBottom: 10,
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#EE0D0D',
        marginBottom: 5,
    },
    originalPriceText: {
        fontSize: 14,
        color: '#666',
        textDecorationLine: 'line-through',
        marginBottom: 15,
    },
    countContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    countButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
    },
    countButtonText: {
        fontSize: 18,
    },
    quantityInput: {
        width: 40,
        height: 30,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    saveButton: {
        marginLeft: 50,
    },
    saveButtonText: {
        color: '#134FEC',
        fontWeight: 700,
        fontFamily: 'Roboto-Regular',

    },
    linkText: {
        color: '#134FEC',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 14.06,
        fontFamily: 'Roboto-Regular',
    },
    couponContainer: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
    },
    couponRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    couponIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    couponInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    applyButton: {
        backgroundColor: '#0A5EB7',
        padding: 10,
        borderRadius: 5,
    },
    applyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    footerContainer: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginVertical: 10,
        padding: 10,
    },

    footerOrderContainer: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginTop: 100,
        padding: 10,
        height: 100,
    },
    moneyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    giftText: {
        fontSize: 12,
        color: '#011627',
        fontWeight: 700,
        fontFamily: 'Roboto-Regular',
    },
    giftLinkText: {
        fontSize: 12,
        color: '#134FEC',
        fontWeight: 700,
        fontFamily: 'Roboto-Regular',
    },
    subtotalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#011627',
    },
    subtotalPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EE0D0D',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#808080',
    },
    totalPriceText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EE0D0D',
    },
    orderButton: {
        backgroundColor: '#E53935',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    orderButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});