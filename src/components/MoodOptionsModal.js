import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const MoodOptionsModal = ({ visible, onClose, onEdit, onDelete }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.optionButton} onPress={onEdit}>
            <Text style={styles.optionText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={onDelete}>
            <Text style={styles.optionText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  optionButton: {
    padding: 12,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
  },
  cancelButton: {
    marginTop: 8,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#666666',
  },
});

export default MoodOptionsModal;
