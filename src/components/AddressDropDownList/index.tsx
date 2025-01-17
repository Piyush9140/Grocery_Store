import {useState} from 'react';
import {FlatList, Image, View, Pressable, Text, Modal} from 'react-native';
import {styles} from '../AddressDropDownList/style.ts';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/scaling.ts';
const AddressDropDownList: FC = () => {
  const [service, setService] = useState<string>('');
  const [address, setAddress] = useState<number>(1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const addressList: Address[] = [
    {
      id: 1,
      address: 'No. 23, ABC Street, XYZ area, City, State',
    },
    {
      id: 2,
      address: 'Apt. 676 74041 Forest Plaza, Treenachester, NM 52333-6862',
    },
    {
      id: 3,
      address: 'Apt. 871 48162 Lakin Ports, Columbusview, MD 87423',
    },
    {
      id: 4,
      address: '18041 Kuhn Pine, Oberbrunnerborough, PA 95373',
    },
    {
      id: 5,
      address: 'No. 23, ABC Street, XYZ area, City, State',
    },
  ];
  const selectedAdress: Address | undefined = addressList.find(
    object => object.id === address,
  );
  console.log(selectedAdress);

  const selectingAddress = (id: number) => {
    setAddress(id);
    setModalVisible(!modalVisible);
  };
  const AddressListCard: FC<{address: Address}> = ({address}) => {
    return (
      <Pressable
        style={[
          styles.selectListCard,
          {
            borderBottomWidth: horizontalScale(0.5),
            paddingHorizontal: horizontalScale(10),
            marginRight: horizontalScale(3),
            alignItems: 'center',
          },
        ]}
        onPress={() => selectingAddress(address.id)}>
        <View
          style={{
            flexDirection: 'row',
            gap: 9,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../assets/images/icons/marker.png')} />
          <View style={{height: verticalScale(30)}}>
            <Text numberOfLines={2}>{address.address}</Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <FlatList
            data={addressList}
            renderItem={({item}) => <AddressListCard address={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </Modal>
      <Pressable
        style={[
          styles.selectListCard,
          {
            paddingHorizontal: horizontalScale(15),
            borderTopWidth: horizontalScale(0.3),
          },
        ]}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={{flexDirection: 'row', gap: 6}}>
          <Image source={require('../../assets/images/icons/marker.png')} />
          <View style={{overflow: 'hidden', width: horizontalScale(255)}}>
            <Text numberOfLines={1}>{selectedAdress?.address}</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/icons/chevron-down.png')}
          style={{marginRight: horizontalScale(5)}}
        />
      </Pressable>
    </View>
  );
};

export default AddressDropDownList;
